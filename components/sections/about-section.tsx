import Image from "next/image";
import SectionLayout from "@/components/layout/section-layout";
import ExperienceTimeline from "@/components/ui/experience-timeline";
import { ChevronDown, Download } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PersonalProjects from "../ui/personal-projects";

interface AboutSectionProps {
  sectionNumber: number;
  sectionId: string;
}

export default function AboutSection({
  sectionNumber,
  sectionId,
}: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<"experience" | "projects">(
    "experience"
  );
  const [isExpanded, setIsExpanded] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (isExpanded === section) {
      setIsExpanded(null);
    } else {
      setIsExpanded(section);
      setActiveTab(section as "experience" | "projects");
    }
  };

  return (
    <SectionLayout
      sectionId={sectionId}
      title="ABOUT ME"
      sectionNumber={sectionNumber}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="relative max-lg:hidden">
          <div className="relative z-10 overflow-hidden rounded-lg">
            <Image
              src="/about-me.png?height=600&width=500"
              alt="Rocktim Profile"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-8 left-8 w-full h-full border-2 border-yellow-300 rounded-lg -z-0"></div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">{personalInfo.title}</h3>
          <p className="text-gray-300 leading-relaxed">{personalInfo.bio1}</p>
          {/* <p className="text-gray-300 leading-relaxed">{personalInfo.bio2}</p> */}

          {/* <div className="grid md:grid-cols-2 gap-4 pt-4">
            {Object.entries(personalInfo.details).map(([key, value]) => (
              <div key={key}>
                <h4 className="text-yellow-300 font-medium mb-2">{key}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div> */}

          <div className="pt-4 max-md:flex max-md:justify-center">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-yellow-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
            >
              <Download className="w-5 h-5" />
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-24">
        {/* Desktop View */}
        {/* <div className="hidden md:block">
          <div className="flex gap-24 mb-8">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("experience")}
                className={`text-3xl font-semibold transition-colors ${
                  activeTab === "experience"
                    ? "text-yellow-300"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <span>Experience</span>
              </button>
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: activeTab === "experience" ? "100%" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-yellow-300"
              />
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("projects")}
                className={`text-3xl font-semibold transition-colors ${
                  activeTab === "projects"
                    ? "text-yellow-300"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <span>Projets Personnels</span>
              </button>
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: activeTab === "projects" ? "100%" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-yellow-300"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceTimeline />
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PersonalProjects />
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}

        {/* Mobile Accordion */}
        {/* <div className="md:hidden space-y-4">
          <div className="border border-[#333339] rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("experience")}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span
                className={`text-xl font-semibold ${
                  isExpanded === "experience"
                    ? "text-yellow-300"
                    : "text-gray-400"
                }`}
              >
                Experience
              </span>
              <motion.div
                animate={{ rotate: isExpanded === "experience" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded === "experience" && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0">
                    <ExperienceTimeline />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border border-[#333339] rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("projects")}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span
                className={`text-xl font-semibold ${
                  isExpanded === "projects"
                    ? "text-yellow-300"
                    : "text-gray-400"
                }`}
              >
                Projets Personnels
              </span>
              <motion.div
                animate={{ rotate: isExpanded === "projects" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded === "projects" && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0">
                    <PersonalProjects />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div> */}
      </div>
    </SectionLayout>
  );
}
