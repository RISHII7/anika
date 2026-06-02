// D:\Projects\Anika\apology\tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['Alex Brush', 'cursive']
      },
      colors: {
        gold: '#D4AF37',
      }
    },
  },
  plugins: [],
}
