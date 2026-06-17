/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8c00',
        'primary-light': '#ffa54d',
        'bg-dark': '#050505',
        'bg-section': '#1a1a1a',
        success: '#22c55e',
        danger: '#ef4444',
        'text-muted': '#a0a0a0',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
      },
      boxShadow: {
        'card-shadow': '0 20px 40px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
