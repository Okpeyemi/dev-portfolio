import Image from "next/image"
import { technologies } from "@/data/technologies"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function TechGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid max-lg:grid-cols-6 grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl border border-[#333339] hover:border-yellow-300 bg-[#1a1a1e] hover:bg-yellow-300/10 flex items-center justify-center p-4 transition-transform hover:scale-105"
            >
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400 mb-2">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
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
              Technologies
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
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="relative aspect-square rounded-xl border border-[#333339] bg-[#1a1a1e] flex items-center justify-center p-4"
                      >
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                        <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400 mb-2">
                          {tech.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}