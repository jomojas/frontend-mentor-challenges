/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        white: "hsl(0, 0%, 100%)",
        gray: {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)"
        }
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      },
      screens: {
        sm: "400px",
        md: "768px",
        lg: "1440px"
      },
    },
  },
  plugins: [],
}

