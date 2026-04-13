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
        cream: "#FAF8F4",
        ink: "#0D0D0D",
        "ink-muted": "#6B6B6B",
        flux: "#FF5C35",
        "flux-dark": "#E04420",
        pulse: "#2563EB",
        "pulse-light": "#DBEAFE",
        blush: "#FFF0EB",
        sage: "#E8F5EC",
      },
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "headline": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
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
