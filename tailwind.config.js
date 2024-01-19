/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: "Titillium Web",
      },
      colors: {
        "color-2-500": "#353535",
        "color-1-500": "#FAA500",
        "color-4-500": "#EFEFEF",
        "color-3-500": "#FAFAFA"
      },
      maxWidth: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
