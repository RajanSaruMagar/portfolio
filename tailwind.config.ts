// import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        bgGreen:"#009B48",
        bgRed:"#E93229",
        bgGold:"#FFD700",
        bgWhite:"#FFFFFF",
        bgSky:"#40E0D0",
        navColor:"#0E7490"
      },
     
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
