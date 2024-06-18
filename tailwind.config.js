/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Anek: ["Anek Devanagari", "sans-serif"]
      },
      rotate: {
        '270': '270deg',
      },
      inset: {
        '60%': '60%',
      },
      boxShadow: {
        'card': '5px 5px 10px 0px rgba(13, 148, 136, 0.5), -5px -5px 10px -5px rgba(13, 148, 136,1)',
      },

    },
  },
  plugins: [],
}

