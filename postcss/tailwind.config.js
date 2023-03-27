/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container: {
      center: true,

    },
    extend: {
      spacing: {
        "5rem": "5rem",
      }
    },
  },
  plugins: [],
}
