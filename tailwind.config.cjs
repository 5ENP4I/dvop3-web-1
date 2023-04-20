/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Font1': 'Plus Jakarta Sans'
      },
      colors: {
        system: {
          blue: {
            300: '#BADCFF',
            500: '#24609B'
          },
          gray: {
            border: '#E1E8EC'
          }
        }
      },
      spacing: {
        '59': '14.875rem'
      },
      height: {
        '666': '66.4vh'
      }
    },
  },
  plugins: [],
}
