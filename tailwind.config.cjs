/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      hiperBlack: "#1F202F",
      black: "#2B2D42",
      white: "#EDF2F4",
      grey: "#8D99AE",
    },
    extend: {},
  },
  plugins: [],
}
