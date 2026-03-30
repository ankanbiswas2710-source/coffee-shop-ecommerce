/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          900: '#2A1B14',
          800: '#3B261D',
          700: '#5A3B2D',
          500: '#A97459',
          300: '#E5C7B1'
        }
      },
      boxShadow: {
        premium: '0 16px 40px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};
