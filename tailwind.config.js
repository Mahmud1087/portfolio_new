/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serrat: 'Montserrat',
        spartan: 'League Spartan',
        lato: 'Lato',
        jolly: 'Jolly Lodger',
      },
    },
  },
  plugins: [],
};
