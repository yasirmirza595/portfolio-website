/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    // ⚡ TailwindCSS for utility-first CSS
    tailwindcss: {},

    // 🚀 Autoprefixer (default settings hi enough hain)
    autoprefixer: {},

    // 🌿 Modern CSS nesting
    "postcss-nesting": {},

    // 👨‍💻 CSS Variables support
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
                svgo: false, // disable SVG optimization conflicts
              },
            ],
          },
        }
      : {}),
  },
};
