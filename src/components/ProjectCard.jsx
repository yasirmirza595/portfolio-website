import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaImage } from "react-icons/fa";

function ProjectCard({ title, description, image, techStack = [], githubLink, liveDemo }) {
  const [imgError, setImgError] = useState(false);
  const slug = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="rounded-2xl shadow-lg hover:shadow-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40 overflow-hidden flex flex-col group transition-all duration-500 hover:border-blue-500/40"
      role="region"
      aria-labelledby={`project-title-${slug}`}
    >
      {/* Project Image / Fallback */}
      <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {!imgError && image ? (
          <>
            <motion.img
              src={image}
              alt={`Screenshot of ${title} project`}
              className="w-full sm:h-56 md:h-64 lg:h-72 object-cover object-center group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
            />
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-start p-4"
            >
              <p className="text-white text-base font-semibold tracking-wide opacity-95">
                {title}
              </p>
            </motion.div>
          </>
        ) : (
          <div className="w-full sm:h-56 md:h-64 lg:h-72 flex flex-col items-center justify-center text-gray-500 dark:text-gray-300">
            <FaImage className="text-4xl mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg shadow-md" />
            <span className="text-sm">No Preview Available</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          id={`project-title-${slug}`}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative w-fit group-hover:text-blue-500 transition-colors duration-300"
        >
          {title}
          <motion.span
            layoutId="project-underline"
            className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"
          />
        </h3>

        <p className="text-gray-700 dark:text-gray-300 flex-grow text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack Badges */}
        {techStack.length > 0 && (
          <div
            className="flex flex-wrap gap-2 mb-4"
            aria-label="Technologies used in this project"
          >
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 
                           dark:from-gray-700 dark:to-gray-600 dark:text-gray-200 transition-transform duration-300 hover:scale-110 hover:shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap gap-4">
          {githubLink && (
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 text-sm font-semibold shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub /> Code
            </motion.a>
          )}

          {liveDemo && (
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={`View live demo of ${title}`}
            >
              <FaExternalLinkAlt /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
