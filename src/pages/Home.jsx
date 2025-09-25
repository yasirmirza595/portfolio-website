import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, FolderOpen } from "lucide-react";

function Home() {
  const roles = [
    "Software Engineer 🚀",
    "Full Stack Developer 💻",
    "AI & Agentic Systems Enthusiast 🤖",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center 
                 text-center px-6 overflow-hidden transition-colors duration-500"
      aria-label="Home introduction section"
    >
      {/* 🔹 Background gradient spread */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 
                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* 🔹 Floating blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse -z-10"></div>

      {/* 🔹 Rotating gradient circle */}
      <motion.div
        className="absolute w-[32rem] h-[32rem] bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                   rounded-full blur-3xl top-1/4 left-1/2 -translate-x-1/2 -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      ></motion.div>

      {/* 🔹 Heading */}
      <motion.h1
        className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
          Yasir Mirza
        </span>{" "}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </motion.h1>

      {/* 🔹 Typing animation for roles */}
      <motion.div
        className="mt-8 text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          key={roles[0]}
          className="font-semibold text-blue-600 dark:text-blue-400"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.1, 0.9, 1],
          }}
        >
          {roles[0]}
        </motion.span>
        <motion.span
          key={roles[1]}
          className="font-semibold text-purple-600 dark:text-purple-400 absolute"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            times: [0.3, 0.4, 0.7, 0.8, 1],
          }}
        >
          {roles[1]}
        </motion.span>
        <motion.span
          key={roles[2]}
          className="font-semibold text-indigo-600 dark:text-indigo-400 absolute"
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            times: [0.6, 0.7, 0.9, 1],
          }}
        >
          {roles[2]}
        </motion.span>
      </motion.div>

      {/* 🔹 Call to Action Buttons */}
      <motion.div
        className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.8 }}
      >
        {/* Projects Button */}
        <motion.a
          href="#projects"
          className="flex items-center justify-center gap-2 px-8 py-4 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     text-white rounded-2xl shadow-lg font-semibold text-lg 
                     hover:shadow-xl hover:scale-105 hover:shadow-blue-500/40 
                     transition duration-300 backdrop-blur-lg"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="View Projects"
        >
          <FolderOpen className="w-5 h-5" /> View Projects
        </motion.a>

        {/* CV Button */}
        <motion.a
          href="/Yasir_Mirza_CV.pdf"
          download
          className="flex items-center justify-center gap-2 px-8 py-4 
                     border-2 border-blue-600 dark:border-purple-500 
                     text-blue-600 dark:text-purple-400 rounded-2xl 
                     bg-white/70 dark:bg-gray-800/50 backdrop-blur-md 
                     font-semibold text-lg shadow-md 
                     hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                     hover:text-white hover:border-transparent 
                     hover:shadow-purple-500/40 transition duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Download CV"
        >
          <ArrowDownToLine className="w-5 h-5" /> Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Home;
