/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      'cta': "url('./src/assets/images/cta-bg.jpg')",
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    darkTheme: "light",
  }
};