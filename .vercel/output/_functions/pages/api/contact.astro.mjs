import 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
const POST = async ({ request }) => {
  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, message: "Corps de requête invalide." });
  }
  const name = (data.name || "").toString().trim();
  const email = (data.email || "").toString().trim();
  const phone = (data.phone || "").toString().trim();
  (data.service || "").toString().trim();
  const message = (data.message || "").toString().trim();
  const website = (data.website || "").toString().trim();
  if (website) return json(200, { ok: true });
  if (!name || !email || !phone || !message) {
    return json(400, { ok: false, message: "Merci de remplir tous les champs obligatoires." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { ok: false, message: "Adresse email invalide." });
  }
  if (message.length > 5e3) {
    return json(400, { ok: false, message: "Message trop long." });
  }
  {
    console.error("[contact] RESEND_API_KEY manquante");
    return json(500, { ok: false, message: "Le service d'envoi n'est pas configuré. Contactez-nous par téléphone." });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
