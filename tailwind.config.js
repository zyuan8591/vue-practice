/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      main: '1200px',
    },
    extend: {
      colors: {
        accentClr: '#e60012',
      },
    },
  },
  plugins: [],
};
