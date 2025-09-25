import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function SkillCard({
  name,
  icon: Icon,
  level = "75%",
  description = "",
  duration = 1200, // ⏱ smoother count-up
}) {
  const numeric =
    typeof level === "string" ? parseInt(level, 10) || 0 : Math.round(level);

  const [count, setCount] = useState(0);
  const playedRef = useRef(false);

  // 🎯 Count-up animation
  const animateCount = (target) => {
    const start = performance.now();
    function loop(now) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const value = Math.round(target * t);
      setCount(value);
      if (t < 1) requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  return (
    <motion.article
      className="group flex items-center space-x-4 p-6
                 bg-white/5 dark:bg-gray-900/40
                 backdrop-blur-xl rounded-2xl
                 shadow-lg border border-gray-200/10
                 hover:shadow-2xl hover:shadow-blue-500/30
                 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06 }}
      onViewportEnter={() => {
        if (!playedRef.current) {
          playedRef.current = true;
          animateCount(numeric);
        }
      }}
    >
      {/* 🔹 Icon */}
      <div
        className="flex-shrink-0 w-14 h-14 rounded-xl 
                   bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
                   flex items-center justify-center text-white text-2xl 
                   shadow-md group-hover:scale-110 transition-transform duration-300"
      >
        {Icon ? (
          <Icon className="w-7 h-7" aria-label={`${name} icon`} />
        ) : (
          <span className="font-bold">{name?.[0]}</span>
        )}
      </div>

      {/* 🔹 Skill Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
            {name}
          </h4>
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 min-w-[40px] text-right">
            {count}%
          </span>
        </div>

        {description && (
          <p
            className="text-sm text-gray-600 dark:text-gray-400 italic line-clamp-2"
            title={description}
          >
            {description}
          </p>
        )}

        {/* 🔹 Progress Bar */}
        <div
          className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full mt-3 overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={numeric}
          aria-label={`${name} proficiency ${numeric} percent`}
        >
          <motion.div
            className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-inner"
            initial={{ width: 0 }}
            whileInView={{ width: `${numeric}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.article>
  );
}
