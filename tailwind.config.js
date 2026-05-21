/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "var(--color-panel-high)",
        "accent-foreground": "var(--color-ink)",
        background: "var(--color-bg)",
        card: "var(--color-panel)",
        "card-foreground": "var(--color-ink)",
        destructive: "var(--color-coral)",
        input: "var(--color-line)",
        muted: "var(--color-panel)",
        "muted-foreground": "var(--color-muted)",
        primary: "var(--color-green)",
        "primary-foreground": "var(--color-bg)",
        ring: "var(--color-cyan)",
        secondary: "var(--color-panel-high)",
        "secondary-foreground": "var(--color-ink)",
      },
      animation: {
        spotlight: "spotlight 2s var(--ease-out) 0.25s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.6)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
