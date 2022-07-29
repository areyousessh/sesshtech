/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        black: {
          100: '#151515',
          200: '#000000',
        },
        
        yellow: {
          100: '#E8EC3E',
          200: '#FFF50D',
          300: '#FFF500',
        },

        white: {
          100: '#FFFFFF',
          200: '#FEFEFE',
        },

        orange: {
          100: '#EF9645',
          200: '#DF580C',
        },
        
        grey: {
          100: '#737373',
          200: '#434343',
        },

        blue: {
          100: '#32F6F6'
        }

      }
    },
  },
  plugins: [],
}
