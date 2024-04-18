import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./safelist.txt",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#344356",
        secondary: "#ED8936",
        alternate: "#0987A0",
        copy: "#333333",
        black: "#000000",
        white: "#FFFFFF",
        grey1: "#F0F0F0",
        grey2: "#DCDCDC",
        grey3: "#BEBEBE",
        grey4: "#828282",
        grey5: "#505050",
        grey6: "#323232",
        success: "#68D391",
        warning: "#E53E3E",
        transparent: "transparent",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2.5rem",
          md: "1.2rem",
          xl: "2.5rem",
        },
      },
      fontFamily: {
        primary: ["Inter", "Arial", "sans-serif"],
        secondary: ["Arial, Times New Roman", "serif"],
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        md: [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "1.75rem",
          {
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "400",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "400",
          },
        ],
        "5xl": [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "400",
          },
        ],
        "6xl": [
          "3rem",
          {
            lineHeight: "3.25rem",
            fontWeight: "400",
          },
        ],
        "7xl": [
          "4rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "8xl": [
          "4.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "9xl": [
          "5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "10xl": [
          "5.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "11xl": [
          "6rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "12xl": [
          "6.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "13xl": [
          "7rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "14xl": [
          "7.5rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
        "15xl": [
          "8rem",
          {
            lineHeight: "1",
            fontWeight: "400",
          },
        ],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      fontSize: ["responsive", "h1", "h2", "h3", "h4", "h5", "h6"], // Add h* styles
    },
  },
};

export default config;
