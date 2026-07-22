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
        cream: "#F3F4F1",
        ink: "#06070A",
        "ink-muted": "#666C7A",
        flux: "#CF3723",
        "flux-dark": "#A92A1B",
        pulse: "#31356D",
        "pulse-light": "#BACDFF",
        blush: "#BACDFF",
        sage: "#D9E6D3",
      },
      fontFamily: {
        display: ["Space Grotesk Variable", "Arial", "sans-serif"],
        body: ["Manrope Variable", "Arial", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(4.5rem, 11vw, 10rem)", { lineHeight: "0.84", letterSpacing: "-0.075em" }],
        "display": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.92", letterSpacing: "-0.06em" }],
        "headline": ["clamp(2rem, 4vw, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.045em" }],
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in": "cubic-bezier(0.7, 0, 0.84, 0)",
        "circ-out": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
      },
    },
  },
  plugins: [],
};

export default config;
