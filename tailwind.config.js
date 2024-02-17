/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-red': '#FF0000',
        'dark-red': '#AC0E14',
        'dark-grey': '#4A4A4A',
        'pure-black': '#1D1D1B',
      },
      screens: {
        xs: '412px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
