//yogesh dev
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#059669",   // Emerald 600
          dark: "#047857",      // Emerald 700
          light: "#34D399",     // Emerald 400
        },
        secondary: {
          DEFAULT: "#10B981",   // Emerald 500
          light: "#D1FAE5",     // Emerald 100
        },
        muted: {
          DEFAULT: "#64748B",    // Slate 500
          dark: "#334155",       // Slate 700 (Heading)
          light: "#94A3B8",      // Slate 400
        },
        background: "#F8FAFC",   // Slate 50
        surface: "#FFFFFF",
        border: "#E2E8F0",
      },
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.3)', // Green glow
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    }
  },
  plugins: [],
};

