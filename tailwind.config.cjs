/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'rose': '0 35px 60px -15px rgba(199, 110, 121)'
      },
      colors: {
        pink: '#FF0084'
      }
    },
  },
  plugins: [],
}
