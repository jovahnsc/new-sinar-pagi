/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1.5rem",
      },
    },
    extend: {
      colors: {
        primaryColor: "#fffff0",
        primaryColorLight: "#fff",
        secondaryColor: "#dda15e",
        paragraphColor: "c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#b3c186",
        redColor: "#d16d38",
        darkColor: "#000",
        darkColorLight: "#171717",
        aspectRatio: {
          "9/16": "9 / 16",
        },
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        "bounce-slow": "bounce 4s linear infinite",
        movingY: "move 4s linear infinite",
      },
      screens: {
        sm: "320px",
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
