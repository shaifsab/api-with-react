/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jose': ['Josefin Sans', 'sans-serif']
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}