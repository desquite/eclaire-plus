import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Domaine canonique : indispensable pour le sitemap et les balises canonical
  site: 'https://eclaire-plus.com',
  // Mode hybride : pages statiques par défaut, opt-in serveur pour les API routes
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  server: { port: 4321, host: true },
});
