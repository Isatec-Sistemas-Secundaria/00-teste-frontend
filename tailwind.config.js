/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#3b6cf8',
          dark: '#4f7bfa',
          hover: '#2d5de0',
          'dark-hover': '#3b6cf8',
        },
        page: {
          light: '#f1f5f9',
          dark: '#0f172a',
        },
        card: {
          light: '#ffffff',
          dark: '#1e293b',
        },
        border: {
          light: '#e2e8f0',
          dark: '#334155',
        },
        input: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          primary: {
            light: '#1e293b',
            dark: '#f1f5f9',
          },
          secondary: {
            light: '#64748b',
            dark: '#94a3b8',
          },
          muted: {
            light: '#94a3b8',
            dark: '#475569',
          },
          placeholder: {
            light: '#94a3b8',
            dark: '#475569',
          },
        },
      },
    },
  },
  plugins: [],
};
