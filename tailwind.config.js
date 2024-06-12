/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '270': '270deg',
      },
      inset: {
        '60%': '60%',
      }
    },
  },
  plugins: [],
}

