/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50:  '#f0f7f2',
          100: '#d4e8da',
          200: '#c8e6d4',
          300: '#7aab8a',
          400: '#4a7c59',
          500: '#3a6647',
          600: '#2d5a3d',
          700: '#1e3a28',
        },
        cream: '#f7f4ee',
        stone: '#e8e4dc',
        bark:  '#8b7355',
      },
      backdropBlur: { xs: '4px' },
      borderRadius: { '2xl': '16px', '3xl': '20px' },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.4s ease forwards',
        'pulse-dot': 'pulseDot 1.2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseDot: { '0%,80%,100%': { transform: 'scale(0.7)', opacity: '0.4' }, '40%': { transform: 'scale(1)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}
