import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Y&Y Automotive Website",
    description:
      "A responsive automotive website showcasing car models and services with a sleek user interface.",
    image: "/images/yy-automotive.png",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yasirmirza595/yy-frontend",
    liveDemo: "https://yy-frontend.vercel.app/",
  },
  {
    title: "WhatsApp Bot",
    description:
      "An automated WhatsApp bot for customer support and engagement using Twilio API.",
    image: "/images/whatsapp-bot.png",
    techStack: ["Node.js", "Twilio API", "JavaScript"],
    githubLink: "https://github.com/yourusername/whatsapp-bot",
    liveDemo: "",
  },
  {
    title: "E-commerce Store",
    description:
      "Full-featured e-commerce store with shopping cart, authentication, and payment integration.",
    image: "/images/ecommerce-store.png",
    techStack: ["React", "Redux", "Firebase"],
    githubLink: "https://github.com/yourusername/ecommerce-store",
    liveDemo: "https://mystore.com",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                 py-24 px-6 transition-colors duration-500"
      aria-labelledby="projects-heading"
    >
      {/* Decorative Background Shape */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_60%)]"></div>

      {/* Section Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          id="projects-heading"
          className="text-4xl sm:text-5xl font-extrabold 
                     bg-gradient-to-r from-blue-600 to-purple-600 
                     bg-clip-text text-transparent drop-shadow-md"
        >
          🚀 Projects
        </h2>
        <motion.div
          className="mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of my favorite projects that showcase my{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            skills
          </span>{" "}
          and{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            creativity
          </span>
          .
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl overflow-hidden shadow-lg 
                       bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm 
                       border border-gray-200 dark:border-gray-700 
                       hover:border-transparent hover:bg-gradient-to-br 
                       hover:from-blue-600/10 hover:to-purple-600/10 
                       transition duration-300"
            aria-label={`Project: ${project.title}`}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
