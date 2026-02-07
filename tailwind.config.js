/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          500: '#00ff9d',
          600: '#00cc7d',
        },
        electric: {
          500: '#00f0ff',
          600: '#00c0cc',
        },
        neon: {
          500: '#b026ff',
          600: '#8c1ecc',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
