/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // toggle dark mode via 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // 🎨 Brand Colors
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#9333EA",
          light: "#A855F7",
          dark: "#7E22CE",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#D97706",
          foreground: "#1F2937",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#F87171",
          dark: "#DC2626",
          foreground: "#FFFFFF",
        },
        background: {
          light: "#f7f8fb",
          dark: "#071027",
        },
        text: {
          light: "#0f172a",
          dark: "#e6eef8",
        },
        accent: {
          from: "#2563EB",
          to: "#7c3aed",
          pink: "#EC4899",
          purple: "#8B5CF6",
          teal: "#14B8A6",
        },
        gray: {
          950: "#0A0A0A",
        },
      },

      // 🔤 Fonts
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
      },

      // 📐 Spacing & Radius
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },

      // 🌟 Shadows
      boxShadow: {
        soft: "0 2px 12px rgba(0, 0, 0, 0.08)",
        intense: "0 4px 24px rgba(0, 0, 0, 0.15)",
        glow: "0 0 20px rgba(37, 99, 235, 0.4)",
        glass: "0 8px 32px rgba(0,0,0,0.25)",
      },

      // 💎 Blur Effects
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
      },

      // 🎬 Animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.6)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite linear",
        fadeInSlow: "fadeIn 2s ease-in-out",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },

      // 🌈 Gradients
      backgroundImage: {
        "app-radial":
          "radial-gradient(1200px 600px at 10% 10%, rgba(37,99,235,0.06), transparent 10%), radial-gradient(1000px 600px at 90% 90%, rgba(124,58,237,0.04), transparent 12%)",
        "accent-gradient": "linear-gradient(90deg, #2563EB, #7c3aed)",
        "dark-radial":
          "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.2), transparent 50%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.2), transparent 50%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
    require("tailwindcss-gradients"),
  ],
};
