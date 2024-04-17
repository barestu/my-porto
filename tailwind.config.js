/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato, sans-serif',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '840px',
        md: '840px',
        lg: '840px',
        xl: '840px',
        '2xl': '840px',
      },
    },
  },
  plugins: [],
};
