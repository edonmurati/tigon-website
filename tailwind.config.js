/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#FAFAF8",
          alt: "#F3F3F0",
        },
        dark: {
          DEFAULT: "#08090E",
          100: "#0F1218",
          200: "#161B24",
          300: "#1E2330",
        },
        accent: {
          DEFAULT: "#C8964A",
          hover: "#B5853F",
        },
        ink: {
          DEFAULT: "#1A1D24",
          light: "#4B5563",
          muted: "#9CA3AF",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      lineHeight: {
        display: "0.92",
        heading: "1.1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
