/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Charte Eclaire Plus déduite du site original
        brand: {
          red: '#e63946',         // Rouge accent (titres, liens, boutons)
          'red-dark': '#c1121f',
          navy: '#1a2238',        // Bleu marine foncé (hero, footer)
          'navy-light': '#2a3552',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        heading: ['Roboto', '"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
