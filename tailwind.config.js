/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    extend: {
      colors: {
        'primary': '#DC1E23',
      },
    },
  },
  plugins: [],
}
