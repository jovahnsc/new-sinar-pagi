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
        aspectRatio: {
          "9/16": "9 / 16",
        },
      },
      animation: {
        "bounce-slow": "bounce 4s linear infinite",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        hero: "url('img/hero.png')",
      },
      boxShadow: {
        xs: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
