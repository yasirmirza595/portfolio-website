import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase, SiRedux } from "react-icons/si";

const skills = [
  { category: "Frontend", items: [
      { name: "React", icon: FaReact, level: "90%" },
      { name: "Redux", icon: SiRedux, level: "80%" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "85%" },
      { name: "HTML5", icon: FaHtml5, level: "95%" },
      { name: "CSS3", icon: FaCss3Alt, level: "90%" },
      { name: "JavaScript", icon: FaJsSquare, level: "88%" },
    ]
  },
  { category: "Backend", items: [
      { name: "Node.js", icon: FaNodeJs, level: "85%" },
      { name: "Java", icon: FaJava, level: "80%" },
      { name: "Python", icon: FaPython, level: "75%" },
    ]
  },
  { category: "Databases", items: [
      { name: "MongoDB", icon: SiMongodb, level: "80%" },
      { name: "SQL", icon: FaDatabase, level: "75%" },
      { name: "Firebase", icon: SiFirebase, level: "70%" },
    ]
  },
  { category: "Tools", items: [
      { name: "Git", icon: FaGitAlt, level: "85%" },
      { name: "GitHub", icon: FaGithub, level: "90%" },
    ]
  }
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                 py-20 px-6 transition-colors duration-500"
      aria-labelledby="skills-heading"
    >
      {/* Heading */}
      <motion.h2
        id="skills-heading"
        className="text-4xl font-extrabold text-center mb-16 
                   bg-gradient-to-r from-blue-600 to-purple-600 
                   bg-clip-text text-transparent drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💡 My Skills
      </motion.h2>

      {/* Categories */}
      <div className="max-w-7xl mx-auto grid gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-xl bg-white/70 dark:bg-gray-800/60 
                       backdrop-blur-lg border border-gray-200/40 
                       dark:border-gray-700/40"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-purple-400">
              {group.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {group.items.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
                      <skill.icon size={26} />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  {/* Modern Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
