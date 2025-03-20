"use client";

import { personalProjects } from "@/data/personal-projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonalProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? personalProjects : personalProjects.slice(0, 3);

  return (
    <div>
      <div className="relative border-l-2 border-yellow-300 pl-8 space-y-12">
        <AnimatePresence>
          {displayedProjects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[43px] top-0 w-5 h-5 rounded-full bg-yellow-300"></div>
              <div className="mb-2">
                <span className="text-yellow-300 font-medium">{item.period}</span>
              </div>
              <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-yellow-300/10 text-yellow-300 rounded-full border border-yellow-300/20"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {personalProjects.length > 3 && (
        <div className="max-md:flex max-md:justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 inline-flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Voir moins" : "Voir plus"}
          </motion.button>
        </div>
      )}
    </div>
  );
}