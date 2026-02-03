/**
 * COMPONENTE: CaseSidebar
 * Adaptive sidebar navigation — dark over hero, light over content
 * Hidden on mobile, visible on lg+ screens
 */

"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CaseSidebarSection } from "@/types";

interface CaseSidebarProps {
  projectName: string;
  sections: CaseSidebarSection[];
}

export function CaseSidebar({ projectName, sections }: CaseSidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      // Hero is ~70vh, switch when scrolled past it
      const heroHeightPx = window.innerHeight * 0.6;
      setIsOverHero(window.scrollY < heroHeightPx - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50"
      aria-label="Case study sections"
    >
      <div
        className={cn(
          "rounded-2xl p-4 min-w-[180px] transition-all duration-300",
          isOverHero
            ? "bg-black/40 backdrop-blur-md border border-white/10"
            : "bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50"
        )}
      >
        {/* Project Name */}
        <div
          className={cn(
            "mb-4 pb-3 border-b transition-colors duration-300",
            isOverHero ? "border-white/20" : "border-gray-200"
          )}
        >
          <span
            className={cn(
              "text-[10px] uppercase tracking-widest font-medium transition-colors duration-300",
              isOverHero ? "text-white/60" : "text-gray-500"
            )}
          >
            Case Study
          </span>
          <h2
            className={cn(
              "text-sm font-bold mt-1 max-w-[160px] leading-tight transition-colors duration-300",
              isOverHero ? "text-white" : "text-gray-900"
            )}
          >
            {projectName}
          </h2>
        </div>

        {/* Section Navigation */}
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-3 w-full text-left py-2 px-2 rounded-lg transition-all duration-200",
                  isOverHero
                    ? activeSection === section.id
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                    : activeSection === section.id
                      ? "bg-gray-100"
                      : "hover:bg-gray-50"
                )}
              >
                <span
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0",
                    isOverHero
                      ? activeSection === section.id
                        ? "bg-white text-gray-900"
                        : "bg-white/20 text-white"
                      : activeSection === section.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-500"
                  )}
                >
                  {section.number}
                </span>
                <span
                  className={cn(
                    "text-sm transition-colors duration-300 truncate",
                    isOverHero
                      ? activeSection === section.id
                        ? "text-white font-medium"
                        : "text-white/70"
                      : activeSection === section.id
                        ? "text-gray-900 font-medium"
                        : "text-gray-500"
                  )}
                >
                  {section.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "mt-4 pt-3 border-t text-xs transition-colors duration-300 w-full text-left flex items-center gap-2",
            isOverHero
              ? "border-white/20 text-white/50 hover:text-white"
              : "border-gray-200 text-gray-500 hover:text-gray-700"
          )}
        >
          <span>&uarr;</span>
          <span>Back to top</span>
        </button>
      </div>
    </nav>
  );
}
