/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust to match your file structure
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '456px',  // Defining a custom screen size 'xs' for screens 320px and up
      },
    },
  },
  plugins: [require('daisyui')],
};

