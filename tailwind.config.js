/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primeform: ["Primeform Pro Demo", "sans-serif"],
      },
      fontWeight: {
        "primeform-regular": "400",
        "primeform-bold": "700",
      },
      backgroundImage: {
        "pattern-parang-krem":
          "url('../public/images/background/pattern-parang-krem.svg')",
      },
    },
  },
  plugins: [],
};
