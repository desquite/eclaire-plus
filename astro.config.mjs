import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Mode hybride : pages statiques par défaut, opt-in serveur pour les API routes
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
  server: { port: 4321, host: true },
});
