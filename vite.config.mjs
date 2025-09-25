import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),

      // 🔥 Progressive Web App Support
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        manifest: {
          name: "Yasir Mirza Portfolio",
          short_name: "Portfolio",
          description:
            "Personal portfolio of Yasir Mirza - Full Stack Developer | React | Node.js | MongoDB | JavaScript | Web Development",
          theme_color: "#2563EB",
          background_color: "#ffffff",
          display: "standalone",
          orientation: "portrait",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "pwa-maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts",
                expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 }, // 1 year
              },
            },
            {
              urlPattern: /^https:\/\/cdn.jsdelivr.net\/.*/i,
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "jsdelivr-cdn",
                expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 }, // 30 days
              },
            },
          ],
        },
      }),

      // ⚡ Compression (Brotli + Gzip)
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        deleteOriginFile: false,
      }),
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
        deleteOriginFile: false,
      }),

      // 📊 Bundle Visualizer
      visualizer({
        filename: "stats.html",
        template: "treemap",
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },

    server: {
      port: 3000,
      open: true,
      strictPort: true,
      https: false,
      hmr: { overlay: true },
      headers: {
        "Cache-Control": "no-store",
      },
    },

    envDir: "./",

    build: {
      outDir: "dist",
      sourcemap: mode !== "production",
      target: "esnext",
      cssCodeSplit: true,
      reportCompressedSize: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: { comments: false },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "react-vendor";
              if (id.includes("framer-motion")) return "framer";
              return "vendor";
            }
          },
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
              return "assets/images/[name]-[hash][extname]";
            }
            if (/\.css$/.test(name ?? "")) {
              return "assets/css/[name]-[hash][extname]";
            }
            if (/\.(woff2?|ttf|eot)$/.test(name ?? "")) {
              return "assets/fonts/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },

    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion"],
    },

    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()), // 📅 build timestamp
    },
  };
});
