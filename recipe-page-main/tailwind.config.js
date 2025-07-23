/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        Stone: {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)"
        },
        Brown: {
          800: "hsl(14, 45%, 36%)"
        },
        Rose: {
          800: "hsl(332, 51%, 32%)",
          50: "hsl(330, 100%, 98%)"
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        young: ['Young Serif', 'serif']
      },
      screens: {
        sm: '400px',
        md: '768px',
        lg: '1440px'
      },
      width :{
        fluidCard: 'clamp(400px, 30vw, 600px)'
      }
    },
  },
  plugins: [],
}

