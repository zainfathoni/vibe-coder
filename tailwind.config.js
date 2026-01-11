/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          cream: '#f5e6d3',
          orange: '#ff6b35',
          teal: '#00b4d8',
          purple: '#9b5de5',
          pink: '#f72585',
          yellow: '#ffd60a',
          green: '#70e000',
          dark: '#1a1a2e',
          navy: '#16213e',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        retro: ['VT323', 'monospace'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'retro-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'retro-lg': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
