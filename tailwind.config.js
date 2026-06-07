/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hologram: {
          purple: '#a855f7',
          blue: '#3b82f6',
          pink: '#ec4899',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
