import type { Config } from "tailwindcss";

const primary = {
  100: "#969Cb2",
  300: "#6933FF",
  400: "#5429cc",
  800: "#363f5f",
  default: "var(--color-primary)",
};

const destructive = {
  400: "#e52e4d",
  default: "var(--color-danger)",
};

const positive = {
  200: "#33cc95",
  400: "#12a454",
  default: "var(--color-positive)",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-poppins)"],
      },
      colors: {
        positive: { ...positive, DEFAULT: positive["default"] },
        destructive: { ...destructive, DEFAULT: destructive["default"] },
        primary: { ...primary, DEFAULT: primary["default"] },
      },
    },
  },
  plugins: [],
};
export default config;
