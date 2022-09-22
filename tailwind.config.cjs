const { default: plugin } = require("tailwindcss");

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      logo: ["YesevaOne", ...FONT_FAMILY_BASE],
      sans: ["Montserrat", ...FONT_FAMILY_BASE],
    },
    extend: {
      colors: {
        primary: "#4C6C5D",
        textColor: "#353535",
        secondary: "#A1B2AA",
        secondLight: "#E0E4DC",
      },
      lineHeight: {
        paragraph: "180%",
      },
      backgroundImage: {
        cover:
          "linear-gradient(to bottom, rgba(49, 49,49, 0), rgba(49, 49,49, .2), rgba(49, 49,49, 1))",
        coverInv:
          "linear-gradient(to bottom, rgba(49, 49,49, 0.7), rgba(49, 49,49, .5), rgba(49, 49,49, 0))",
      },
      screens: {
        xs: "265px",
      },
    },
  },
  plugins: [],
};
