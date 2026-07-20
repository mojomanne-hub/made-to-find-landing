import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#08111F", panel: "#101D30", blue: "#4D8DFF" },
      boxShadow: { glow: "0 0 70px rgba(77, 141, 255, .22)" }
    }
  },
  plugins: []
} satisfies Config;
