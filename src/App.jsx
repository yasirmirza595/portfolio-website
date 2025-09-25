import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-sans text-text-light dark:text-text-dark scroll-smooth min-h-screen flex flex-col transition-colors duration-700">
      {/* ✅ Navigation Bar */}
      <header className="sticky top-0 z-50 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-all">
        <Navbar />
      </header>

      {/* ✅ Main content */}
      <main className="flex-grow space-y-40">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
        >
          <Home />
        </section>

        {/* About */}
        <section
          id="about"
          className="py-32 container mx-auto px-6 glass rounded-3xl shadow-2xl"
        >
          <About />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="py-32 bg-gradient-to-r from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
        >
          <div className="container mx-auto px-6">
            <Projects />
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="py-32 container mx-auto px-6 glass rounded-3xl shadow-2xl"
        >
          <Skills />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-32 bg-gradient-to-r from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
        >
          <div className="container mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>

      {/* ✅ Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
