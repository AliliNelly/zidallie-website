/*@type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 216, 0)",
        secondary: "rgba(255, 216, 0, 0.31)",
        bkg: "rgb(256, 256, 256)",
        card: "rgb(252, 252, 252)",
        content: "rgb(17, 23, 41)",
        muted: "rgba(17,23,41,0.7)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
