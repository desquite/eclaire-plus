export const site = {
  name: 'Eclaire Plus',
  tagline: 'Construisons ensemble votre vision',
  slogan: 'RIGUEUR - EFFICACITÉ - PROFESSIONNALISME',
  description:
    "Société d'étude et de réalisation spécialisée en électricité, climatisation, plomberie, informatique, vidéosurveillance, sécurité incendie et BTP à Abidjan.",
  url: 'https://eclaire-plus.com',
  email: 'info@eclaire-plus.com',
  phones: ['+225 07 99 01 83 60', '+225 07 77 80 08 84'],
  address: 'Abidjan Bingerville, près de la gare routière',
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
