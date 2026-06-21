/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oil-black": "#050506",
        tungsten: "#0d0d0f",
        overlay: "#111114",
        border: "#2d5d61",
        "brand-frontend": "#61dafb",
        "brand-agent": "#1c3c3e",
        subtle: "#e8e6e3",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        full: "9999px",
      },
      transitionTimingFunction: {
        "ease-out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
        "ease-inout-strong": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};
