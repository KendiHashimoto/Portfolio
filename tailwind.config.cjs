/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tabletPortrait: "768px",
      tabletLandscape: "1024px",
      smallDesktop: "1280px",
      mediumDesktop: "1440px",
      bigDesktop: "1920",
    },
    colors: {
      hiperBlack: "#1F202F",
      black: "#2B2D42",
      white: "#EDF2F4",
      grey: "#8D99AE",
    },
    extend: {
      boxShadow: {
        miniButton: "0 0 20px #8D99AE",
      },
    },
  },
  plugins: [],
}
