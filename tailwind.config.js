/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gmgn-dark': '#0a0a0a',
        'gmgn-gray': '#1a1a1a',
        'gmgn-gray-light': '#2a2a2a',
        'gmgn-green': '#10b981',
        'gmgn-green-light': '#34d399',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

