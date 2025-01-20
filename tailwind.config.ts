import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3a9eff',
          DEFAULT: '#f31260',
          dark: '#005bc4',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    addCommonColors: true,
  })],
} satisfies Config;
