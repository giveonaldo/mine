/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inspiration: ['inspiration', 'sans-serif'],
        inria: ['inria', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
      },
      boxShadow: {
        'custome': '6px 7px 0px 0px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}

