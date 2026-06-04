/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        wine: "#7A0E12",
        charcoal: "#0A0A0A",
        ivory: "#F5F1E8"
      }
    }
  },
  plugins: []
}