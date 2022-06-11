/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'display': ["'Oswald'"],
      'body': ["'Open Sans'"],
    },
    fontSize: {
       '5xl': '1.5rem',
       '6xl': '3rem',
       '7xl': '10rem',
      },
    extend: {},
  },
  plugins: [],
};
