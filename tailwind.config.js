// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        pixel: ['"Nothing5x7"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          DEFAULT: '#00D9FF', // Cyan accent
          dark: '#00B8D4',
          light: '#00E5FF',
          glow: 'rgba(0, 217, 255, 0.3)',
        },
      },
      boxShadow: {
        'accent': '0 0 20px rgba(0, 217, 255, 0.4)',
        'accent-lg': '0 0 30px rgba(0, 217, 255, 0.5)',
      },
    }
  },
  plugins: [],
};
