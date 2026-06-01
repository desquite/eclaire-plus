# Eclaire Plus — site web

Site vitrine de **Eclaire Plus**, société d'étude et de réalisation à Abidjan, spécialisée en électricité, climatisation, plomberie, informatique, vidéosurveillance, sécurité incendie et BTP.

Construit avec [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), entièrement statique et déployable n'importe où.

## Démarrer en local

```sh
npm install
npm run dev
```

Le site est servi sur `http://localhost:4321`.

## Build production

```sh
npm run build
```

Le résultat est généré dans `dist/`, prêt à être déployé sur Vercel, Netlify, Cloudflare Pages ou tout hébergement statique.

## Structure

```
src/
├── data/
│   ├── site.ts          # Coordonnées, contacts, slogans, nav
│   └── services.ts      # Les 7 services (titre, icône, prestations)
├── layouts/
│   └── BaseLayout.astro # SEO, fonts, slot principal
├── components/
│   ├── Header.astro     # Barre top + nav + bouton devis
│   ├── Footer.astro     # Services, contact, horaires
│   └── ServiceCard.astro
└── pages/
    ├── index.astro      # Accueil
    ├── contact.astro    # Formulaire (mailto)
    ├── galerie.astro    # Galerie avec filtres
    └── services/
        ├── index.astro  # Liste services
        └── [slug].astro # Page détaillée par service (dynamique)
```

## Modifier le contenu

- **Coordonnées, horaires, réseaux** → `src/data/site.ts`
- **Services proposés** → `src/data/services.ts` (ajouter une entrée crée automatiquement la page)
- **Photos galerie** → tableau `items` dans `src/pages/galerie.astro`

## Stack

| | |
|---|---|
| Framework | Astro 5 |
| Styling | Tailwind CSS 3 |
| Langues | TypeScript strict |
| Polices | Open Sans + Roboto (Google Fonts) |
| Icônes | SVG inline |
