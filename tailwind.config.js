/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      purple: {
        100: "#e9e7ec",
        200: "#d4cfda",
        300: "#bfb8c7",
        400: "#9589a3",
        500: "#6a597e",
        600: "#55426b",
        700: "#402a59",
        800: "#2B1347",
    },
    red: {
      100: "#fff5f5",
      200: "#fed7d7",
      300: "#feb2b2",
      400: "#fc8181",
      500: "#f56565",
      600: "#e53e3e",
      700: "#c53030",
      800: "#9b2c2c",
      900: "#742a2a",
    },
    green: {
      100: "#e6fffa",
      200: "#b2f5ea",
      300: "#81e6d9",
      400: "#4fd1c5",
      500: "#38b2ac",
      600: "#319795",
      700: "#2c7a7b",
      800: "#285e61",
      900: "#234e52",
    },
    yellow: {
      100: "#fffaf0",
      200: "#feebc8",
      300: "#fbd38d",
      400  : "#f6e05e",
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/hero-banner.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}};
