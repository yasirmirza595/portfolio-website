import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return "light";
    } catch {
      return "light";
    }
  });

  // 🌗 Apply theme to <html>
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (err) {
      console.error("Error applying theme:", err);
    }
  }, [theme]);

  // 🔄 Sync with system preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      role="switch"
      title="Toggle theme"
      className={`relative inline-flex items-center justify-center p-3 rounded-xl 
                  bg-white/20 dark:bg-gray-800/50 
                  backdrop-blur-md shadow-md border border-gray-300/20
                  focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-indigo-400 hover:scale-110 
                  transition-all duration-500 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <FaSun
              className="text-yellow-400 w-6 h-6 drop-shadow-glow"
              aria-hidden="true"
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <FaMoon
              className="text-indigo-500 w-6 h-6 drop-shadow-md"
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
