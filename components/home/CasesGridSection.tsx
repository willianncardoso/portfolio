/**
 * COMPONENTE: CasesGridSection
 * Grid de cases em destaque
 */

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { allCases } from "@/content/cases";
import { getImagePath } from "@/lib/image-path";

export function CasesGridSection() {
  const t = useTranslations("featuredWork");

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle badge={t("title")}>{t("subtitle")}</SectionTitle>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {allCases.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/cases/${caseStudy.id}`}
              className="group block"
            >
              {/* Image with overlay on hover */}
              <div className="aspect-[16/10] relative overflow-hidden rounded-2xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={getImagePath(caseStudy.images.cover)}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/70 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* View Case Study button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent-50 text-accent-700 text-sm font-medium rounded-full border border-accent-200">
                    {caseStudy.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {caseStudy.cardDescription}
                </p>

                {/* Metrics if available */}
                {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                    {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-xl font-bold text-accent-600">
                          {metric.value}
                        </span>
                        <span className="text-sm text-gray-500">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
