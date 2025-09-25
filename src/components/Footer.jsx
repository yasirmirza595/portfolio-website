import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/yasirmirza595",
    label: "GitHub",
    icon: <FaGithub size={22} />,
    bg: "bg-gray-800 hover:bg-gray-700",
  },
  {
    href: "https://linkedin.com/in/yasir-mirza-0b932725a",
    label: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    bg: "bg-gray-800 hover:bg-blue-600",
  },
  {
    href: "mailto:yasirmirza595@gmail.com",
    label: "Email",
    icon: <FaEnvelope size={22} />,
    bg: "bg-gray-800 hover:bg-red-600",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-8 mt-16 shadow-inner overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer bg-[length:200%_100%]" />

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-8">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            whileHover={{ scale: 1.2, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl backdrop-blur-sm bg-opacity-90 ${link.bg}`}
          >
            <span className="sr-only">{link.label}</span>
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-11/12 md:w-2/3 mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-40 mb-6"></div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 text-center tracking-wide">
        © {year} <span className="font-semibold text-white">Yasir Mirza</span>.
        All rights reserved.
      </p>

      {/* Tech credit (optional, looks pro) */}
      <p className="mt-2 text-xs text-gray-500 text-center">
        Built with <span className="text-blue-400">React</span>,{" "}
        <span className="text-teal-400">TailwindCSS</span>, and{" "}
        <span className="text-purple-400">Framer Motion</span>
      </p>

      {/* Scroll to Top Floating Button */}
      <motion.a
        href="#home"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-6 bottom-6 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
        aria-label="Scroll to Top"
        title="Scroll to Top"
      >
        ↑
      </motion.a>
    </footer>
  );
}

export default Footer;
