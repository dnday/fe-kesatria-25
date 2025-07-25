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
        storybook: ["Storybook", "sans-serif"],
      },
      fontWeight: {
        "primeform-regular": "400",
        "primeform-bold": "700",
      },
      screens: {
        xs: "475px",
      },
      backgroundImage: {
        "pattern-parang-krem":
          "url('/images/background/pattern-parang-krem.svg')",
      },
    },
  },
  plugins: [],
};
