/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#3B7BE8',
          blueDark: '#2563EB',
        },
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          input: '#273549',
          border: '#334155',
          text: '#94A3B8',
        }
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,0.12)',
        cardDark: '0 8px 32px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
