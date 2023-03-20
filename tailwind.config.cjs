/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "rich-black": "#000411",
        "dark-purple": "#160C28",
        "napies-yellow": "#EFCB68",
        "honey-dew": "#E1EFE6",
        "ash-gray": "#AEB7B3",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "white-100" : "#f3f3f3"
      },
      boxShadow: {
        "card-1": "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      },
      backgroundImage: {
        "hero-1": "url(/src/assets/hero1.svg)",
        "hero-2": "url(/src/assets/hero2.svg)",
        "hero-3": "url(/src/assets/hero3.svg)",
        
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
