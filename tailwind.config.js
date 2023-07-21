/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/tailwind.css",
  ],
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },

      padding: {
        '120': '120px',
      },

      colors: {
        'theme-color': '#166534',
        'theme-color-2': '#EA580C'
      }
    },
  },
  variants: {},
  plugins: [],
}

