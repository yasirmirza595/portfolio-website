/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    // ⚡ TailwindCSS for utility-first CSS
    tailwindcss: {},

    // 🚀 Autoprefixer with enhanced browser support
    autoprefixer: {
      flexbox: "no-2009",
      grid: "autoplace",
    },

    // 🌿 PostCSS Nesting (modern CSS nesting support)
    "postcss-nesting": {},

    // 🔄 PostCSS Preset Env for future CSS features (without duplicate autoprefixer)
    "postcss-preset-env": {
      stage: 3,
      autoprefixer: false,
      features: {
        "nesting-rules": true,
      },
    },

    // 👨‍💻 CSS Variables support (custom properties preserved)
    "postcss-custom-properties": { preserve: true },

    // ⚡ Optimize CSS only in production
    ...(process.env.NODE_ENV === "production"
      ? {
          cssnano: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                reduceTransforms: true,
                svgo: false // disable SVG optimization conflicts
              },
            ],
          },
        }
      : {}),
  },
};
