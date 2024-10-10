/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: '#191970',
      },
      screens: {
        'xs-max': {'max': '750px'},
      },
    },
  },
  plugins: [],
}