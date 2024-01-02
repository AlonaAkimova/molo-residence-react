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
        "breakfast-background":
          "url('../../src/assets/breakfast-background.jpg')",
      },
      colors: {
        "custom-orange": "#FF8032",
      },
    },
  },
  plugins: [],
};
