import React from "react";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

function About() {
  return (
    <motion.section
      id="about"
      className="relative max-w-6xl mx-auto px-6 sm:px-10 py-20 
                 bg-white/10 dark:bg-gray-900/40 
                 backdrop-blur-lg rounded-3xl shadow-xl 
                 border border-gray-200/20 my-24 overflow-hidden"
      aria-labelledby="about-heading"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Animated Gradient Line */}
      <motion.div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-40 h-1 
                   bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Heading */}
      <h2
        id="about-heading"
        className="text-4xl sm:text-5xl font-extrabold mb-12 
                   text-gray-900 dark:text-white tracking-tight text-center"
      >
        About Me
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Icon / Illustration */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Glow Aura */}
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <div className="relative w-40 h-40 flex items-center justify-center rounded-full 
                          bg-gradient-to-br from-blue-500 to-purple-500 text-white 
                          shadow-xl text-6xl">
            <FaUserTie aria-hidden="true" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-center md:text-left leading-relaxed"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-6">
            I am a{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Software Engineer & Full Stack Developer
            </span>{" "}
            with strong expertise in{" "}
            <span className="px-2 py-0.5 rounded-lg bg-pink-100/70 dark:bg-pink-500/30 text-pink-700 dark:text-pink-300 font-medium">
              MERN Stack
            </span>
            ,{" "}
            <span className="px-2 py-0.5 rounded-lg bg-blue-100/70 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300 font-medium">
              Java
            </span>
            ,{" "}
            <span className="px-2 py-0.5 rounded-lg bg-purple-100/70 dark:bg-purple-500/30 text-purple-700 dark:text-purple-300 font-medium">
              Python
            </span>{" "}
            and{" "}
            <span className="px-2 py-0.5 rounded-lg bg-orange-100/70 dark:bg-orange-500/30 text-orange-700 dark:text-orange-300 font-medium">
              Agentic AI Systems
            </span>
            . I specialize in building scalable applications and intelligent
            solutions that solve real-world problems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-6">
            I have{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              hands-on experience
            </span>{" "}
            as a Backend Developer at{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Elegant
            </span>
            , where I developed a{" "}
            <span className="italic">Workshop Website</span>,{" "}
            <span className="italic">WhatsApp Bot</span>, and a{" "}
            <span className="italic">Booking System</span>. I also built{" "}
            <span className="italic">Yaseen & Yasir Automotive</span>, a
            full-stack platform for hybrid & electric vehicle services.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-8">
            My mission is to{" "}
            <span className="italic text-blue-600 dark:text-blue-400">
              continuously learn
            </span>{" "}
            and contribute to impactful projects that drive{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              innovation and positive change
            </span>{" "}
            in the tech world.
          </p>

          {/* Skills Badges */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
            aria-label="Key skills"
          >
            {[
              "Full Stack Development",
              "React.js",
              "Node.js & Express",
              "MongoDB & SQL",
              "Java & Python",
              "Agentic AI",
              "API Integration",
              "UI/UX Design",
              "Git & Version Control",
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                           text-blue-700 dark:text-blue-300 text-sm font-medium shadow-sm
                           transition-transform duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-7 py-3 rounded-xl 
                         bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white font-semibold shadow-md hover:shadow-xl 
                         transition-all duration-300"
            >
              Let’s Connect
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-7 py-3 rounded-xl border 
                         border-blue-500 text-blue-600 dark:text-blue-400 
                         font-semibold shadow-sm hover:shadow-md 
                         transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
