import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:  "#0D0F14",
        surface:     "#13161E",
        "surface-2": "#1C2030",
        primary:     "#6C63FF",
        accent:      "#FF6B6B",
        warm:        "#FFB347",
        green:       "#4ECDC4",
        "text-base": "#E8EAF0",
        "text-muted":"#6B7280",
        border:      "#1F2433",
        // shadcn compatibility
        foreground:  "#E8EAF0",
        card: {
          DEFAULT:    "#13161E",
          foreground: "#E8EAF0",
        },
        muted: {
          DEFAULT:    "#1C2030",
          foreground: "#6B7280",
        },
        ring:          "#6C63FF",
        input:         "#1F2433",
        destructive:   "#FF6B6B",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
        sans:    ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
        lg:   "12px",
        md:   "8px",
        sm:   "6px",
      },
      spacing: {
        section:        "120px",
        "section-mobile": "64px",
      },
      boxShadow: {
        card:   "0 4px 24px rgba(0, 0, 0, 0.4)",
        glow:   "0 0 24px rgba(108, 99, 255, 0.35)",
        accent: "0 0 24px rgba(255, 107, 107, 0.35)",
        lift:   "0 20px 40px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
