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
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [],
}

