/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Variable', 'Nunito', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-background)',
        foreground: {
          DEFAULT: 'var(--color-foreground)',
          secondary: 'var(--color-foreground-secondary)',
          muted: 'var(--color-foreground-muted)',
        },
        label: 'var(--color-label)',
        card: {
          DEFAULT: 'var(--color-card)',
          border: 'var(--color-card-border)',
        },
        input: {
          DEFAULT: 'var(--color-input-bg)',
          border: 'var(--color-input-border)',
          placeholder: 'var(--color-input-placeholder)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          foreground: 'var(--color-primary-foreground)',
        },
      },
      boxShadow: {
        card: 'var(--color-card-shadow)',
      },
      fontSize: {
        title: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '400' }],
        subtitle: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        label: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        body: ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
