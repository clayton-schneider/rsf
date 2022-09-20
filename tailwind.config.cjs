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
      },
    },
  },
  plugins: [],
};
