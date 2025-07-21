/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        lightBlue: "hsl(212, 45%, 89%)",
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(216, 15%, 48%)",
        deepDark: "hsl(218, 44%, 22%)"
      },
      screens: {
        'sm': '375px',
        'lg': '1440px',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

