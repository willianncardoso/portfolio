/**
 * COMPONENTE: CaseSidebar
 * Sticky sidebar navigation with numbered sections
 * Hidden on mobile, visible on lg+ screens
 */

"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CaseSidebarSection } from "@/types";

interface CaseSidebarProps {
  sections: CaseSidebarSection[];
}

export function CaseSidebar({ sections }: CaseSidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40"
      aria-label="Case study sections"
    >
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "flex items-center gap-3 text-sm transition-all duration-200",
                activeSection === section.id
                  ? "text-gray-900 font-medium"
                  : "text-gray-400 hover:text-gray-600"
              )}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                  activeSection === section.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {section.number}
              </span>
              <span className="hidden xl:inline">{section.title}</span>
            </button>
          </li>
        ))}

        <li className="pt-4 border-t border-gray-200 mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            &uarr; Top
          </button>
        </li>
      </ul>
    </nav>
  );
}
