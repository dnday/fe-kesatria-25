const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "publica-sans": ["Public Sans", "sans-serif"],
        primeform: ["PrimeformProDemo", "sans-serif"],
      },
      colors: {
        "oren-kesatria": "#FFE5C7",
        "ungu-kesatria": "#5E1675",
        "ungu-kesatria-2": "#34144E",
      },
    },
  },
  plugins: [],
};
