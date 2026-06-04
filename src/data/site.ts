export const site = {
  name: 'Eclaire Plus',
  tagline: 'Construisons ensemble votre vision',
  slogan: 'RIGUEUR - EFFICACITÉ - PROFESSIONNALISME',
  description:
    "Société d'étude et de réalisation à Abidjan : électricité générale, climatisation, plomberie, informatique, vidéosurveillance, sécurité incendie et BTP. Devis gratuit, intervention 24h/24 en Côte d'Ivoire.",
  url: 'https://eclaire-plus.com',
  email: 'info@eclaire-plus.com',
  phones: ['+225 07 99 01 83 60', '+225 07 77 80 08 84'],
  // Forme E.164 pour les données structurées (sans espaces)
  phonesE164: ['+2250799018360', '+2250777800884'],
  address: {
    full: 'Zone Industrielle de Koumassi, Abidjan',
    street: 'Zone Industrielle, Koumassi',
    locality: 'Abidjan',
    region: 'Abidjan',
    country: 'CI',
  },
  // Coordonnées approximatives de Koumassi Zone Industrielle — à affiner via Google Business Profile
  geo: { lat: 5.2980, lng: -3.9490 },
  // Zones d'intervention (SEO local)
  areaServed: ['Abidjan', 'Koumassi', 'Cocody', 'Assinie', 'Côte d’Ivoire'],
  hours: [
    { day: 'Lundi - Vendredi', value: '7h30 - 17h30' },
    { day: 'Samedi', value: '8h00 - 12h00' },
    { day: 'Dimanche', value: 'Fermé' },
  ],
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
} as const;

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Contact', href: '/contact' },
] as const;
