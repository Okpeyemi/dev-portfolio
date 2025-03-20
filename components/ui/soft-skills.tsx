"use client";

import { softSkills } from "@/data/skills";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SoftSkills() {
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedSoftSkills = showAll ? softSkills : softSkills.slice(0, 6);

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-4">
          <AnimatePresence>
            {displayedSoftSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#252529] hover:border hover:border-yellow-300 hover:bg-yellow-300/20 p-5 rounded-xl">
                  <h4 className="font-medium mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {softSkills.length > 6 && (
          <div className="flex justify-center">
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

      {/* Mobile Accordion */}
      <div className="md:hidden">
        <div className="border border-[#333339] rounded-lg overflow-hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span
              className={`text-xl font-semibold ${
                isExpanded ? "text-yellow-300" : "text-gray-400"
              }`}
            >
              Soft Skills
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 space-y-4">
                  {softSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-[#252529] border border-[#333339] p-4 rounded-xl"
                    >
                      <h4 className="font-medium mb-2">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}