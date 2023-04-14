/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '59': '14.875rem'
      },
      fontFamily:{
        jakarta: ['Plus Jakarta Sans']
      }
    },
  },
  plugins: [],
}
