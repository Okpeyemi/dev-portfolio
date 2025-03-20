"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

export default function Header({ currentSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set isScrolled to true when currentSection > 1
    setIsScrolled(currentSection > 1);
  }, [currentSection]);

  const navItems = [
    { label: "HOME", section: 1, id: "home" },
    { label: "ABOUT", section: 2, id: "about" },
    { label: "SKILLS", section: 3, id: "skills" },
    { label: "PROJECTS", section: 4, id: "projects" },
    { label: "CONTACT", section: 5, id: "contact" },
  ];

  const handleNavigation = (section: number, id: string) => {
    onNavigate(section);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Original header - visible when not scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-5 max-lg:hidden bg-[#1a1a1e]/80 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="logo">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Rocktim Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </Link>
          </div>
          <div className="flex gap-8 text-sm tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavigation(item.section, item.id)}
                className={`hover:text-yellow-300 transition-colors ${
                  currentSection === item.section ? "text-yellow-300" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Compact header - visible when scrolled */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-md:hidden ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-20 pointer-events-none max-lg:opacity-100 max-lg:translate-y-0"
        }`}
      >
        <div className="bg-[#252529]/90 backdrop-blur-sm text-white rounded-full py-3 px-8 shadow-lg flex items-center justify-center space-x-8 border border-[#333339]">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavigation(item.section, item.id)}
              className={`text-sm font-medium transition-colors ${
                currentSection === item.section
                  ? "text-yellow-300 font-semibold"
                  : "text-gray-300 hover:text-yellow-300"
              }`}
            >
              {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
