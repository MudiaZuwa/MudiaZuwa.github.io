/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oil-black": "#050506",
        tungsten: "#18181b",
        overlay: "#1c3c3e",
        border: "#2d5d61",
        "brand-frontend": "#61dafb",
        "brand-agent": "#1c3c3e",
        muted: "#8ba5a7",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1c3c3e 0%, #61dafb 100%)",
        "brand-gradient-subtle":
          "linear-gradient(135deg, #1c3c3e 0%, #2d5d61 50%, #61dafb 100%)",
      },
    },
  },
  plugins: [],
};
