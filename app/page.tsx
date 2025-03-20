"use client"

import { useRef, useState, useEffect } from "react"
import Header from "@/components/layout/header"
import SocialLinks from "@/components/layout/social-links"
import ScrollIndicator from "@/components/layout/scroll-indicator"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"

export default function Home() {
  const [currentSection, setCurrentSection] = useState(1)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRef.current) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Determine which section is currently in view
      const sectionNumber = Math.floor(scrollPosition / windowHeight) + 1
      setCurrentSection(sectionNumber > 5 ? 5 : sectionNumber)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionNumber: number) => {
    window.scrollTo({
      top: window.innerHeight * (sectionNumber - 1),
      behavior: "smooth",
    })
  }

  return (
    <div ref={sectionsRef} className="relative bg-[#1a1a1e] text-white">
      <Header currentSection={currentSection} onNavigate={scrollToSection} />
      <SocialLinks />
      <ScrollIndicator currentSection={currentSection} onScroll={() => scrollToSection(currentSection + 1)} />

      <HeroSection sectionId="home" sectionNumber={1} />
      <AboutSection sectionId="about" sectionNumber={2} />
      <SkillsSection sectionId="skills" sectionNumber={3} />
      <ProjectsSection sectionId="projects" sectionNumber={4} />
      <ContactSection sectionId="contact" sectionNumber={5} />

      <Footer />
    </div>
  )
}

