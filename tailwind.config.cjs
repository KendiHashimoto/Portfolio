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
    colors: {},
    extend: {},
  },
  plugins: [],
}
