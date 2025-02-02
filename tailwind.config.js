/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust to match your file structure
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

