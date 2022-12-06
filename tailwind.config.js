/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "header-desktop": "240px",
      },
      backgroundColor: {
        primaryColor: "#00831B",
        header: "#EEF8D880",
      },
    },
  },
  plugins: [],
};
