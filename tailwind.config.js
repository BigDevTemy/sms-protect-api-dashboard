/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  // content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      fontSize:{
        smm:'0.6rem',
        smmx:'0.8rem'
      },
      colors: {
        smsgreen:'#07CABC',
        borderGray:'#96A6BC',
        lightBlack:'#011816'
      },
      screens: {
        '4xl': '3840px', // Adjust the width based on your requirements
      },
    },
  },
  plugins: [],
}

