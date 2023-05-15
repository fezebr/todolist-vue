/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
