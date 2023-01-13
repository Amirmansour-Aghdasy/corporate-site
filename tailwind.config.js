/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": { min: "1440px" },
      },
    },

    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
