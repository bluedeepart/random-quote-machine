/** @type {import('tailwindcss').Config} */
const color = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      color: color,
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
