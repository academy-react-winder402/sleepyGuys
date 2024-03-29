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
      mdb: "867px",
      lgl: "920px",
      lg: "1024px",
      lgb: "1150px",
      xl: "1280px",
      xlb: "1390px",
      xll: "1450px",
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
        MainBodyBg: "F3F4F6",
        dark: {
          DEFAULT: "#1c1c27",
          lighter: "#282830",
          darker: "#050506",
        },
        primary: {
          DEFAULT: "#436E8E",
          lighter: "#6088A8",
          darker: "#2D526E",
        },
        secondary: {
          DEFAULT: "#E38569",
        },
        lightTitle: {
          DEFAULT: "#4D4D4D",
          lighter: "#333333",
          darker: "#666666",
        },
        darkTitle: {
          DEFAULT: "#fff",
        },
        lightBody: {
          DEFAULT: "#8D8D8D",
        },
        darkBody: {
          DEFAULT: "#B3B3B3",
        },
        btnText: {
          DEFAULT: "#fff",
        },
        gray: {
          darker: "#4D4D4D",
          lighter: "#B3B3B3",
        },
        white: {
          DEFAULT: "#FFF",
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
        light: {
          colors: {
            background: "#F3F4F6",
          },
        },
      },
    }),
  ],
};

export default config;
