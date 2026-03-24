/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        pulseRing: {
          '0%': { transform: 'scale(0.98)', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(37, 99, 235, 0)' },
          '100%': { transform: 'scale(0.98)', boxShadow: '0 0 0 0 rgba(37, 99, 235, 0)' },
        }
      },
      animation: {
        scan: 'scan 2s infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
