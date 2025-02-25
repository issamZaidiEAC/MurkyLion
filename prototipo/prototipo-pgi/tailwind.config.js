/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
     'platinum': '#d2cfce',
     'black': '#181D27',
     'yellow': '#FFD046'
    },
    fontFamily: {
      pixel: ['Press-Start-2P', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

