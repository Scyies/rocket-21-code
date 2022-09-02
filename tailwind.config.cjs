/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '400px',
      'md': '768px',
      'lg': '1440px'
    },
    extend: {
      animation: {
        'lightStart': 'fade 8s linear',
        'lightLate': 'fadeL 6s linear',
        'clickPulse': 'pulse 1s linear',
        'loadingBar': 'loading 10s linear',
        'fadeIn': 'fadeIn 1s linear',
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
        },
        pulse: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: .5
          }
        },
        loading: {
          '0%': {
            width: '1%'
          },
          '100%': {
            width: '98%'
          }
        },
        fadeIn: {
          '0%': { opacity: 0},
          '100%': { opacity: 1 }
        }
      },
      boxShadow: {
        'rose': '10px 35px 60px -15px rgba(199, 110, 121)'
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
        ricky: 'Patrick Hand'
      },
      colors: {
        pink: '#FF0084',
        preto: {
          900: '#222831',
          800: '#393E46',
          700: '#252A34',
          600: '#212121'
        },
        azul: {
          300: '#00ADB5',
          700: '#0F3460',
          800: '#16213E',
          900: '#112D4E'
        },
        roxo: {
          500: '#533483'
        },
        branco: {
          500: '#EEEEEE',
          400: '#F6F6F6',
          300: '#fffff0',
          200: '#F5EDDC'
        },
        marrom: {
          500: '#44281d',
          200: '#d9cab3',
          100: '#e4a788'
        },
        amarelo: {
          500: '#f0e14a'
        },
        verde: {
          500: '#97ce4c',
          200: '#6d9886'
        },
        rosa: {
          500: '#e89ac7',
          700: '#E94560'
        },
        cinza: {
          500: '#CFD2CF'
        }
      }
    },
  },
  plugins: [],
}
