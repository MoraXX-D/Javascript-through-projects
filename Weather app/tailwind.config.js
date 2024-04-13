/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins:{
    preflight:false,
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '90':'90%',
        '100':'100%'
      },
      maxWidth:{
        '470':'470px'
      },
      margin:{
        '100': '100px '
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '*': {
          padding: 0,
          margin: 0,
          fontFamily: ['Poppins', 'sans-serif'],
          boxSizing: 'border-box',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}