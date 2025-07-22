/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray500: "hsl(0, 0%, 42%)",
        gray900: "hsl(0, 0%, 7%)"
      },
      screens: {
        sm: "450px",
        md: "768px",
        lg: "1440px"
      },
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"]
      },
      boxShadow: {
        'custom-dark': '8px 8px 00px rgba(0, 0, 0, 1)' 
      },
      fontSize: {
        'fluid-size': 'clamp(1rem, 2.5vw, 1.5rem)',
      },
      width: {
        'fluid-avatar': 'clamp(2.5rem, 6vw, 4rem)',
      }
    },
  },
  plugins: [],
}

