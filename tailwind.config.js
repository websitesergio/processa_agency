/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#080705',
          2: '#12100C',
        },
        ivory: {
          DEFAULT: '#F5F2EC',
          2: '#EBE6DC',
        },
        gold: {
          DEFAULT: '#D4A853',
          deep: '#B8923F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ["'Playfair Display'", 'Georgia', 'serif'],
      },
      fontSize: {
        h1: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        h2: ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1.0625rem', { lineHeight: '1.75' }],
        label: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        prose: '68ch',
        site: '1140px',
      },
      borderRadius: {
        card: '16px',
        btn: '8px',
      },
    },
  },
  plugins: [],
};
