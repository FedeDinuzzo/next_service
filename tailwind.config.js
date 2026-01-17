/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [, "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#f8fafc",
        secondary: "#00064F",
        dimWhite: "rgba(15, 23, 42, 0.7)",
        dimBlue: "rgba(0, 6, 79, 0.08)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
