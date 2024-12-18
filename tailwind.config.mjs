/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          50: "#f9f9f9",
          100: "#efefef",
          200: "#e6e6e6",
          300: "#dbdbdb",
          400: "#d1d1d1",
          500: "#c7c7c7",
          600: "#bdbdbd",
          700: "#b3b3b3",
          800: "#a8a8a8",
          900: "#9e9e9e",
          950: "#949494",
          DEFAULT: "#f9f9f9",
        },
        "base-dark": {
          50: "#808080",
          100: "#757575",
          200: "#6b6b6b",
          300: "#616161",
          400: "#575757",
          500: "#4d4d4d",
          600: "#424242",
          700: "#383838",
          800: "#2e2e2e",
          900: "#242424",
          950: "#1a1a1a",
          DEFAULT: "#1a1a1a",
        },

        accent: {
          50: "#ffffff",
          100: "#c7c7c7",
          200: "#b3b3b3",
          300: "#949494",
          400: "#707070",
          500: "#545454",
          600: "#3d3d3d",
          700: "#292929",
          800: "#1c1c1c",
          900: "#141414",
          950: "#000000",
          DEFAULT: "#000000",
          light: "#ffffff",
          dark: "#000000",
        },
        primary: {
          50: "#f1fcf1",
          100: "#e0f9df",
          200: "#c2f1c1",
          300: "#92e491",
          400: "#5acf59",
          500: "#2045F3",
          DEFAULT: "#2045F3",
          600: "#2045F3",
          700: "#1a37e2",
          800: "#1632cc",
          900: "#0e28b8",
          950: "#092a0b",
        },
        secondary: {
          50: "#edfaff",
          100: "#d6f2ff",
          200: "#b5eaff",
          300: "#83dfff",
          400: "#48cbff",
          DEFAULT: "#01037D",
          500: "#01037D",
          600: "#01037D",
          700: "#000a6b",
          800: "#00095b",
          900: "#00044a",
          950: "#000224",
        },
        cta: {
          50: "#f0f9fb",  // Tonos claros iniciales
          100: "#e1f4f6",
          200: "#b3e5e8",
          300: "#80d6da",
          400: "#4dc7cd",
          DEFAULT: "#FF4308",  // Color base
          500: "#FF4308",
          600: "#008d9f",
          700: "#00787a",
          800: "#005d5a",
          900: "#00443b",
          950: "#002c24",
      },

      
      
        complementary1: {
          DEFAULT: "#FF4308",
          500: "#FF4308",
        },
        complementary2: {
          DEFAULT: "#0084E7",
          500: "#0084E7",
        },
      },
      screens: {
        midmd: "880px",//Portatil
        
        dm:"390px",//celular grande o tablet
        pm:"1024px",//Pantalla media
        gm:"1440px",//Pantalla escritorio
        rm:"1920px"//Pantalla HD
      },
      boxShadow: {
        aesthetic: "0 3px 10px rgb(0,0,0,0.2)",
        dark: "inset 0 1px 0 0 #ffffff0d",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
