import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../data/site';

// Route serverless (pas de prerender)
export const prerender = false;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, message: 'Corps de requête invalide.' });
  }

  const name = (data.name || '').toString().trim();
  const email = (data.email || '').toString().trim();
  const phone = (data.phone || '').toString().trim();
  const service = (data.service || '').toString().trim();
  const message = (data.message || '').toString().trim();
  // Honeypot anti-bot
  const website = (data.website || '').toString().trim();

  if (website) return json(200, { ok: true });
  if (!name || !email || !phone || !message) {
    return json(400, { ok: false, message: 'Merci de remplir tous les champs obligatoires.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { ok: false, message: 'Adresse email invalide.' });
  }
  if (message.length > 5000) {
    return json(400, { ok: false, message: 'Message trop long.' });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY manquante');
    return json(500, { ok: false, message: "Le service d'envoi n'est pas configuré. Contactez-nous par téléphone." });
  }

  const to = import.meta.env.CONTACT_TO || site.email;
  const from = import.meta.env.CONTACT_FROM || `Eclaire Plus <noreply@${site.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}>`;

  const subject = `[Devis] ${service || 'Demande'} – ${name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2238;">
      <h2 style="color: #e63946; border-bottom: 3px solid #e63946; padding-bottom: 8px;">Nouvelle demande de devis</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 6px 0; font-weight: bold; width: 130px;">Nom :</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Email :</td><td><a href="mailto:${escapeHtml(email)}" style="color: #e63946;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Téléphone :</td><td><a href="tel:${escapeHtml(phone)}" style="color: #e63946;">${escapeHtml(phone)}</a></td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Service :</td><td>${escapeHtml(service) || '—'}</td></tr>
      </table>
      <h3 style="margin-top: 20px;">Message</h3>
      <div style="background: #f9fafb; padding: 16px; border-left: 4px solid #e63946; white-space: pre-wrap;">${escapeHtml(message)}</div>
      <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">Envoyé via le formulaire de contact de eclaire-plus.com</p>
    </div>
  `;

  const text = [
    `Nouvelle demande de devis`,
    ``,
    `Nom: ${name}`,
    `Email: ${email}`,
    `Téléphone: ${phone}`,
    `Service: ${service || '—'}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error('[contact] Resend error:', error);
      return json(502, { ok: false, message: "Échec d'envoi. Merci de réessayer ou de nous appeler." });
    }
    return json(200, { ok: true, message: 'Votre demande a bien été envoyée. Nous vous recontactons rapidement.' });
  } catch (e) {
    console.error('[contact] Exception:', e);
    return json(500, { ok: false, message: "Erreur serveur. Merci de réessayer plus tard." });
  }
};
