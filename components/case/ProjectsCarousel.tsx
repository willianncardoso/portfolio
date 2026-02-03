/**
 * COMPONENTE: ProjectsCarousel
 * Horizontal carousel showing all other case studies at the bottom of a case page
 */

"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { allCases } from "@/content/cases";
import { getImagePath } from "@/lib/image-path";

interface ProjectsCarouselProps {
  currentCaseId: string;
}

export function ProjectsCarousel({ currentCaseId }: ProjectsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const otherCases = allCases.filter((c) => c.id !== currentCaseId);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  if (otherCases.length === 0) return null;

  return (
    <Section spacing="lg" background="white">
      <Container size="lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              More Projects
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              Explore Other Case Studies
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        >
          {otherCases.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/cases/${caseStudy.id}`}
              className="group flex-shrink-0 w-[300px] snap-start"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={getImagePath(caseStudy.images.cover)}
                    alt={caseStudy.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Metric Badge */}
                  {caseStudy.metrics && caseStudy.metrics[0] && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                      <div className="text-sm font-bold text-gray-900">
                        {caseStudy.metrics[0].value}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {caseStudy.metrics[0].label}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {caseStudy.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mt-1 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-3 text-sm text-gray-500 group-hover:text-gray-900 transition-colors">
                    <span>View Case Study</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Back to all projects */}
        <div className="text-center mt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <span>&larr;</span>
            <span>Back to All Projects</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
