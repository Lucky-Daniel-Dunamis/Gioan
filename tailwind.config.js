/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

