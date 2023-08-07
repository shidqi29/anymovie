/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "rgb(191, 191, 191)",
        accent: "#DAA520",
      },
    },
  },
  plugins: [],
};
