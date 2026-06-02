export type Projet = {
  src: string;
  title: string;
  tag: 'BTP' | 'Électricité' | 'Climatisation';
  location?: string;
};

// Vraies réalisations Eclaire Plus. Ordre = ordre d'affichage galerie.
export const projets: Projet[] = [
  // --- BTP / Construction ---
  { src: '/img/projets/immeuble-r3-seguela-facade.jpeg',     title: 'Immeuble R+3 — façade achevée',          tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/villa-assinie.jpeg',                  title: 'Villa de standing en bord de mer',       tag: 'BTP', location: 'Assinie' },
  { src: '/img/projets/hopital-senegal.jpeg',                title: 'Centre hospitalier',                     tag: 'BTP', location: 'Sénégal' },
  { src: '/img/projets/immeuble-r3-seguela-claustra.jpeg',   title: 'Pose de claustras décoratifs — R+3',     tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/immeuble-r3-elec-clim.jpeg',          title: 'Immeuble R+3 — électricité & climatisation', tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/immeuble-r3-facade-travaux.jpeg',     title: 'Immeuble R+3 — façade en travaux',       tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/immeuble-r3-coursive.jpeg',           title: 'Coursive en cours de finition',          tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/immeuble-r3-sejour.jpeg',             title: 'Séjour livré — carrelage marbre',        tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/immeuble-r3-salle-de-bain.jpeg',      title: 'Salle de bain — faïence marbrée',        tag: 'BTP', location: 'Séguéla' },
  { src: '/img/projets/hopital-senegal-vue.jpeg',            title: "Vue d'ensemble du chantier hospitalier", tag: 'BTP', location: 'Sénégal' },
  { src: '/img/projets/hopital-bloc-operatoire.jpeg',        title: 'Bloc opératoire équipé',                 tag: 'BTP', location: 'Sénégal' },

  // --- Climatisation ---
  { src: '/img/projets/clim-unites-exterieures-seguela.jpeg', title: 'Installation des unités extérieures',   tag: 'Climatisation', location: 'Séguéla' },
  { src: '/img/projets/clim-split-r3.jpeg',                  title: 'Climatiseur split installé',             tag: 'Climatisation', location: 'Séguéla' },
  { src: '/img/projets/clim-sejour-r3.jpeg',                 title: 'Séjour climatisé avec vue',              tag: 'Climatisation', location: 'Séguéla' },

  // --- Électricité ---
  { src: '/img/projets/elec-armoire-commande.jpeg',          title: 'Armoire de commande — câblage Schneider', tag: 'Électricité' },
  { src: '/img/projets/elec-poste-transformation.jpeg',      title: "Installation d'un poste de transformation", tag: 'Électricité' },
  { src: '/img/projets/elec-mise-en-service-disjoncteur.jpeg', title: "Mise en service d'un disjoncteur de puissance", tag: 'Électricité' },
  { src: '/img/projets/elec-tableau-assinie.jpeg',           title: 'Câblage de tableau divisionnaire',       tag: 'Électricité', location: 'Assinie' },
  { src: '/img/projets/elec-inverseur-groupe.jpeg',          title: 'Inverseur de source — groupe électrogène', tag: 'Électricité' },
  { src: '/img/projets/elec-coffret-pompes.jpeg',            title: 'Coffret de commande de pompes',          tag: 'Électricité' },
  { src: '/img/projets/elec-chemin-cable.jpeg',              title: 'Pose de chemins de câbles',              tag: 'Électricité' },
];
