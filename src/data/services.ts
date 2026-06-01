export type Service = {
  slug: string;
  title: string;
  icon: string;          // chemin vers icône png dans public/
  excerpt: string;       // texte court pour les cartes
  details: string[];     // paragraphes détaillés pour la page individuelle
  highlights: string[];  // bullet points / prestations clés
};

export const services: Service[] = [
  {
    slug: 'electricite',
    title: 'Électricité Générale',
    icon: '/fonts/flash.png',
    excerpt:
      "Installation, maintenance et réparation d'équipements électriques pour tous vos projets de construction.",
    details: [
      "Notre équipe d'électriciens qualifiés intervient sur tous types de projets, du domestique au tertiaire et à l'industriel.",
      "De la conception du réseau électrique à la mise en service, nous assurons la conformité aux normes en vigueur et la sécurité de vos installations.",
    ],
    highlights: [
      'Mise en place de tableaux électriques',
      'Câblage courant fort et courant faible',
      'Éclairage intérieur et extérieur',
      'Mise aux normes et diagnostics',
      'Dépannage 24h/24',
    ],
  },
  {
    slug: 'climatisation',
    title: 'Climatisation',
    icon: '/fonts/air-conditioner.png',
    excerpt:
      'Mise en place et maintenance des systèmes de climatisation pour vos projets de rénovation.',
    details: [
      "Nous installons et entretenons des systèmes de climatisation adaptés à chaque espace : maisons, bureaux, commerces et locaux industriels.",
      "Nos techniciens vous conseillent sur la solution la plus performante et économe en énergie selon votre besoin.",
    ],
    highlights: [
      'Climatiseurs split, multi-split, gainables',
      'Étude thermique et dimensionnement',
      'Installation et mise en service',
      'Maintenance préventive et curative',
      'Contrat d\'entretien annuel',
    ],
  },
  {
    slug: 'plomberie',
    title: 'Plomberie',
    icon: '/fonts/plumber.png',
    excerpt:
      "Installation, maintenance et réparation de tous types de systèmes de plomberie.",
    details: [
      "Nous prenons en charge l'ensemble des travaux de plomberie : adduction d'eau, évacuation, sanitaires et chauffe-eau.",
      "Nos plombiers garantissent des installations durables et étanches, conformes aux règles de l'art.",
    ],
    highlights: [
      'Installation salle de bain et cuisine',
      'Réseaux d\'évacuation et adduction',
      'Détection et réparation de fuites',
      'Chauffe-eau électriques et solaires',
      'Dépannage rapide',
    ],
  },
  {
    slug: 'informatique',
    title: 'Informatique',
    icon: '/fonts/science.png',
    excerpt:
      'Maintenance des systèmes informatiques domestiques et commerciaux, serveurs et réseaux.',
    details: [
      "Notre équipe accompagne PME et particuliers sur l'ensemble de leur infrastructure informatique : postes de travail, serveurs et réseaux.",
      "Nous proposons audit, déploiement, maintenance et formation utilisateur.",
    ],
    highlights: [
      'Câblage réseau et fibre',
      'Installation de serveurs',
      'Configuration Wi-Fi professionnel',
      'Maintenance préventive postes et serveurs',
      'Sauvegarde et plan de reprise',
    ],
  },
  {
    slug: 'videosurveillance',
    title: 'Vidéo-Surveillance',
    icon: '/fonts/cctv.png',
    excerpt:
      'Installation, maintenance et suivi des systèmes de vidéosurveillance.',
    details: [
      "Nous concevons et installons des systèmes de vidéosurveillance adaptés à votre site : commerces, entrepôts, résidences et bureaux.",
      "Solutions analogiques et IP, accès distant smartphone et stockage longue durée.",
    ],
    highlights: [
      'Caméras IP haute définition',
      'Vision nocturne et anti-vandalisme',
      'Enregistrement NVR / cloud',
      'Accès distant smartphone',
      'Détection intelligente',
    ],
  },
  {
    slug: 'securite-incendie',
    title: 'Sécurité Incendie',
    icon: '/fonts/cctv.png',
    excerpt:
      "Mise en conformité, installation et maintenance de vos équipements de sécurité incendie.",
    details: [
      "Nous équipons vos bâtiments en systèmes de détection et d'alarme incendie conformes à la réglementation.",
      "De l'audit de conformité à la maintenance périodique, nous prenons en charge l'ensemble du cycle.",
    ],
    highlights: [
      'Détecteurs de fumée et de chaleur',
      'Centrales d\'alarme incendie',
      'Extincteurs et RIA',
      'Désenfumage',
      'Vérifications périodiques réglementaires',
    ],
  },
  {
    slug: 'btp',
    title: 'BTP',
    icon: '/fonts/crane.png',
    excerpt:
      'Construction et rénovation de bâtiments avec un haut niveau de qualité.',
    details: [
      "Nous accompagnons nos clients dans leurs projets de construction neuve, d'extension et de rénovation lourde.",
      "Études, gros œuvre, second œuvre et finitions : Eclaire Plus gère votre chantier de bout en bout.",
    ],
    highlights: [
      'Construction neuve clé en main',
      'Rénovation et réhabilitation',
      'Gros œuvre et second œuvre',
      'Aménagement intérieur',
      'Suivi de chantier',
    ],
  },
];
