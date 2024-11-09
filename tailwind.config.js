/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        "primary-black": "#1E201E",

        blue_100: "#1D3557",
        blue_50: "#457B9D",
        blue_25: "#A8DADC",
        sky_blue: "#607189",
        bone_white: "#F1FAEE",
      },
    },
  },
  plugins: [],
};
