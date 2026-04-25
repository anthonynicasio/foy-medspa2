/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F0E8',
        sand: '#E9DCCC',
        blush: '#D8B7A4',
        clay: '#B7836D',
        espresso: '#2D211C',
        moss: '#6D735E',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(45, 33, 28, 0.12)',
      },
    },
  },
  plugins: [],
};
