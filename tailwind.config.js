/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        ink: '#080b14',
        panel: '#101626',
        violet: '#9b8cff',
        cyan: '#65e6df',
      },
      boxShadow: {
        glow: '0 0 60px rgba(139, 118, 255, .16)',
      },
    },
  },
  plugins: [],
}