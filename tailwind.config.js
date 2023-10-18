/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#F8F3E9",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        hero: "url('img/hero.png')",
      },
    },
  },
  plugins: [],
};
