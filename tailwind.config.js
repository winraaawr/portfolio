/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
