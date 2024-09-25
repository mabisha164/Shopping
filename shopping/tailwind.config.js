//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For the /app directory in Next.js 13+
    "./pages/**/*.{js,ts,jsx,tsx}", // For the /pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // For any components
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
