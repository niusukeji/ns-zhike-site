/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        nsblue: "#0b75f5",
        nslight: "#1a2b4d",
      },
    },
  },
  plugins: [],
};
