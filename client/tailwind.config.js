/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FOF3FF',
        secondary: '#088AA4'
      }
    },
  },
  plugins: [],
}

