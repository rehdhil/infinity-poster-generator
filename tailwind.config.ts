import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bni: {
          red: '#CF2030',
          black: '#0A0A0A',
          gold: '#D4A437',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
