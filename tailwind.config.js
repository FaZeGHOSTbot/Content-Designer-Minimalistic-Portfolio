/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#f7f5f2',
        charcoal: '#1a1a1a',
        'mid-grey': '#7a7672',
        'light-grey': '#e5e0d8',
        'warm-white': '#faf9f7',
      },
    },
  },
  plugins: [],
};
