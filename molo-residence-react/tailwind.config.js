/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "breakfast-background": "url('../src/breakfast-background.jpg')",
      },
      colors: {
        "custom-orange": "#FF8032",
      },
      screens: {
        sm: "480px", // Define custom screen sizes if needed
      },
      maxWidth: {
        90: "90%", // Define custom max-width utility
      },
    },
  },
  plugins: [],
};
