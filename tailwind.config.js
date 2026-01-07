/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'waste-green': {
          900: '#355130', // Updated Dark Green
          800: '#355130',
        },
        'waste-lime': '#C9E26C', // Updated Light Green
        'waste-yellow': '#F6EA37', // Updated Yellow
        'waste-light': '#F9F9F9', // Updated White
        'waste-bg-light': '#C9E26C', // Updated Light Green for backgrounds
        'waste-black': '#121212', // New Black
        // Nav specific colors matching the new palette
        'nav-white': '#F9F9F9',
        'nav-yellow': '#F6EA37',
        'nav-green': '#C9E26C',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/imagens/hero-bg.svg')", // If needed, or just use colors
      }
    },
  },
  plugins: [],
}

