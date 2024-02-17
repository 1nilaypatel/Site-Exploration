/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4874fc',
        customBlue2: '#a1bafd',
        bgGray: '#d0cccc',
      },
    },
  },
  plugins: [],
}