/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
    },
    extend: {
      textStrokeWidth: {
        2: '2px',
      },
      textStrokeColor: (theme) => theme('colors.black'),
    },
  },
  variants: {
    extend: {
      textStroke: ['textStrokeWidth', 'textStrokeColor'],
    },
  },
  plugins: [],
};
