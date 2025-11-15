/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Green Schools Foundation colors (keeping green theme for now)
        primary: {
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bce5bc",
          300: "#8fd08f",
          400: "#5cb85c",
          500: "#2d5a27",
          600: "#254d21",
          700: "#1f3f1c",
          800: "#1a3318",
          900: "#152914",
        },
        secondary: {
          50: "#f2f7f4",
          100: "#e0ece3",
          200: "#c2d9c7",
          300: "#97bfa1",
          400: "#6a9e75",
          500: "#4a7c59",
          600: "#396146",
          700: "#2f4d39",
          800: "#283f2f",
          900: "#233527",
        },
        accent: {
          50: "#f1f9f2",
          100: "#dff0e1",
          200: "#c1e2c5",
          300: "#90c695",
          400: "#67ab6f",
          500: "#4a8c54",
          600: "#397042",
          700: "#305a36",
          800: "#29482d",
          900: "#233c27",
        },
        // Orange and black colors for future use
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "custom-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
