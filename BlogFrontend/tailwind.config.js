/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        babyBlue: "#E7FAFE", // Black color
        white: "#FFFFFF", // White color
        gray: "#ADB2B1", // Medium gray color
        green: "#2BB32A",
        lightGreen: "#80CB86", // Green color
        darkGreen: "#3D544D", // Darker green color
      },
      fontFamily: {
        sans: ["M Plus 1", "sans-serif"],
      },
      fontSize: {
        h1: ["56px", "64px"],
        h2: ["48px", "56px"],
        h3: ["40px", "48px"],
        h4: ["32px", "40px"],
        h5: ["24px", "32px"],
        h6: ["16px", "24px"],
        "subheading-md": ["18px", "32px"],
        "subheading-sm": ["16px", "32px"],
        "paragraph-lg": ["18px", "32px"],
        "paragraph-sm": ["16px", "32px"],
      },
      spacing: {
        8: "8px", // 8px spacing system
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))", // 12 column grid layout
      },
      animation: {
        slider: "slider 30s linear infinite",
        "gradient-move": "gradientMove 1.5s infinite alternate-reverse",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        gradientMove: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Icons
        ".icon-sm": {
          width: "16px",
          height: "16px",
          color: "#B3B3B3",
        },
        ".icon-md": {
          width: "24px",
          height: "24px",
          color: "#B3B3B3",
        },
        ".icon-lg": {
          width: "32px",
          height: "32px",
          color: "#B3B3B3",
        },
        // Buttons
        ".btn": {
          padding: "0.75rem 2rem",
          borderRadius: "4rem",
          fontWeight: "700",
          display: "inline-block",
          textAlign: "center",
        },
        ".btn-none": {
          display: "none",
        },
        ".btn-primary": {
          backgroundColor: "#2BB32A",
          color: "#fff",
        },
        ".btn-secondary": {
          backgroundColor: "#0F0F0F",
          color: "#fff",
        },
        ".btn-outline": {
          backgroundColor: "transparent",
          borderWidth: "2px",
          borderColor: "#2BB32A",
          color: "#2BB32A",
        },
        ".btn-hover": {
          "&:hover": {
            backgroundColor: "#00693A",
            color: "#fff",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("@tailwindcss/typography"),
  ],
};
