/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'lightStart': 'fade 8s linear',
        'lightLate': 'fadeL 6s linear'
      },
      keyframes: {
        fade: {
          '0%, 7%': { opacity: 1},
          '8%, 10%': { opacity: 0},
          '11%, 20%': { opacity: 0.3},
          '21%, 25%': { opacity: 0.7},
          '26%, 32%': { opacity: 1},
          '33%, 40%': { opacity: 0},
          '41%, 55%': { opacity: 0.3},
          '56%, 70%': { opacity: 0.7},
          '71%, 82%': { opacity: 1},
          '83%, 85%': { opacity: 0.2},
          '86%, 100%': { opacity: 1}
        },
        fadeL: {
          '0%, 7%': { opacity: 0.3},
          '8%, 10%': { opacity: 0.5},
          '11%, 20%': { opacity: 0.2},
          '21%, 25%': { opacity: 0.7},
          '26%, 32%': { opacity: 1},
          '33%, 40%': { opacity: 0},
          '41%, 55%': { opacity: 0.3},
          '56%, 70%': { opacity: 0.7},
          '71%, 82%': { opacity: 1},
          '83%, 85%': { opacity: 0.2},
          '86%, 100%': { opacity: 1}
        }
      },
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
