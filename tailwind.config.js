/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightgray': '#262626',
        'darkgrey': '#e4e4e7',
        'darkgray': '#e4e4e7',
      }
    },
  },
  plugins: [],
}