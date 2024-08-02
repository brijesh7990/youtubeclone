import type { Config } from "tailwindcss";

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
      spacing: {
        "navbar-height-brijesh": "65px",
        "sidebar-height-brijesh": "calc(100vh - 70px)",
        "videocomponent-height": "calc(100vh - 140px)",
      },
      width: {
        "videocomponent-width": "calc(100% - 300px)",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
export default config;
