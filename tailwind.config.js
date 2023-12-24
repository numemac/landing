/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'fade-in-dark': {
          '0%': { 
            filter: 'blur(4px) brightness(2)',
          },
          '100%': {
            filter: 'blur(0px) brightness(1)',
          }
        },
        'fade-in': {
          '0%': { 
            filter: 'blur(4px) brightness(2)',
          },
          '100%': {
            filter: 'blur(0px) brightness(1)',
          }
        },
      }, 
      animation: {
        'more-plus': 'bounce 2s infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'slide-in': 'fade-in 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

