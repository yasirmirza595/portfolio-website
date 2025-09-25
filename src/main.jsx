// src/main.jsx (or src/index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 🌐 Global Styles (Tailwind + custom)
import "./styles/index.css";

// 🌙 Dark Mode Setup
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// 🔒 Error Boundary (for future safety)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("⚠️ Error caught in boundary:", error, info);
    // 🔧 Optionally send error to monitoring (Sentry, LogRocket, etc.)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 text-center p-6">
          <div className="max-w-lg space-y-4">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
              🚨 Oops! Something went wrong.
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Please refresh the page, or contact support if the issue
              continues.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
            >
              🔄 Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
