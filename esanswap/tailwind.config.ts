import type { Config } from "tailwindcss";
import { colors, nextui } from "@nextui-org/react";

// Tailwind CSS configuration object
const config = {
  // Enable dark mode class-based strategy
  darkMode: ["class"],
  // Specify where to find content files for purging unused styles
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // No prefix for utility classes
  prefix: "",
  theme: {
    container: {
      // Center the container by default
      center: true,
      // Set default padding for the container
      padding: "2rem",
      screens: {
        ss: "280px",
        ssl: "360px",
        ssm: "540px",
        sm: "640px",
        md: "768px",
        md11: "820px",
        md1: "912px",
        lg: "1024px",
        xl: "1197px",
        xxl: "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // Include Tailwind CSS animate plugin
  plugins: [
    nextui({
      themes: {
        light: { colors: { background: "hsl(0 0% 100%)" } },
        dark: { colors: { background: "hsl(225.2 84% 4.9%)" } },
      },
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;
