/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        robotoMono: ['"Roboto Mono"', "mono"],
      },
      colors: {
        alabaster: {
          50: "#fcfcfc",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        shark: {
          50: "#f5f6f6",
          100: "#e5e7e8",
          200: "#ced1d3",
          300: "#abb1b5",
          400: "#81898f",
          500: "#666e74",
          600: "#575c63",
          700: "#4b4e53",
          800: "#424548",
          900: "#3a3c3f",
          950: "#2d2f32",
        },
        teak: {
          50: "#f8f5f2",
          100: "#ece1d9",
          200: "#d7c0b0",
          300: "#c29d87",
          400: "#b4846c",
          500: "#a76c59",
          600: "#93564c",
          700: "#7b4542",
          800: "#663a3a",
          900: "#553233",
          950: "#2f191a",
        },
      },
    },
  },
  plugins: [],
};
