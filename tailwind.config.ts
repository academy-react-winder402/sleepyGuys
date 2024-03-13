import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "50px",
    },
    extend: {
      fontFamily: {
        kalamehBold: ["kamalehBold"],
        kalamehBlack: ["kalamehBlack"],
        vazir: ["vazir"],
        peyda: ["peyda"],
      },
      colors: {
        primary: {
          DEFAULT: "#436E8E",
          lighter: "#6088A8",
          darker: "#2D526E",
        },
        white: {
          100: "#FFFFFF",
          200: "#F7F7F7",
          300: "#F0F0F0",
          400: "#E0E0E0",
          500: "#BDBDBD",
          600: "#9E9E9E",
          700: "#757575",
          800: "#616161",
          900: "#424242",
        },
        black: {
          100: "#000000",
          200: "#1A1A1A",
          300: "#333333",
          400: "#4D4D4D",
          500: "#666666",
          600: "#808080",
          700: "#999999",
          800: "#B3B3B3",
          900: "#CCCCCC",
        },
        orange: {
          100: "#E38569",
          200: "#E37E60",
          300: "#E37757",
          400: "#E3704E",
          500: "#E36945",
          600: "#E3623C",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#1c1c27",
            primary: "#436E8E",
          },
        },
      },
    }),
  ],
};

export default config;
