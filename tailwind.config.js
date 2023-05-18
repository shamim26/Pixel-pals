/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'Poppins'", "sans-serif"],
    },
    extend: {
      fontFamily: {
        custom: ["Libre Baskerville", "serif"],
      },
      colors: {
        primary: "#0a5c49",
        secondary: "#F2E3DB",
      },
    },
  },
  plugins: [require("daisyui")],
};
