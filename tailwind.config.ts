import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#958134",
        "dark-gold": "#f7d153",
        "light-gold": "#fff6b9",
        "luxury-black": "#111111",
        gray: "#979797",
      },
      backgroundColor: {
        dim: "rgba(0,0,0,0.8)",
        "dim-gold": "rgba(247,209,83,0.1)",
      },
      backgroundImage: {
        rolex: "url('/cover1.jpg')",
        patek: "url('/cover2.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
