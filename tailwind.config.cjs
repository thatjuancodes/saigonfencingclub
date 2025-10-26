/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#b39d64',
          navy: '#1f232c'
        }
      },
      fontFamily: {
        sans: ['"Poppins"', 'var(--font-astro-sans, sans-serif)']
      }
    }
  },
  plugins: []
};
