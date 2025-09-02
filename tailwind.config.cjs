/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'tampa-blue': '#4A90E2',
        'tampa-green': '#7ED321',
        'tampa-light-blue': '#E3F2FD',
        'tampa-light-green': '#F1F8E9',
      }
    },
  },
  plugins: [],
}
