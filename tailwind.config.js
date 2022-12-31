/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      gilroy: ['Gilroy-regular', 'sans-serif'],
      gilroyMedium: ['Gilroy-medium', 'sans-serif']
    },

    extend: {
      colors: {
        'primary': '#DC1E23',
        'netural': '#807D7D'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
}
