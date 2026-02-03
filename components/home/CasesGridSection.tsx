/**
 * COMPONENTE: CasesGridSection
 * Grid de cases em destaque - Behance-quality
 */

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { allCases } from "@/content/cases";
import { getImagePath } from "@/lib/image-path";

export function CasesGridSection() {
  const t = useTranslations("featuredWork");

  return (
    <section id="work" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-sm font-bold rounded-full border border-primary-200 mb-6">
            {t("title")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            {t("subtitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {allCases.map((caseStudy, index) => (
            <Link
              key={caseStudy.id}
              href={`/cases/${caseStudy.id}`}
              className="group block"
            >
              {/* Image with glow hover effect */}
              <div className="relative mb-10">
                {/* Glow effect behind card */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={getImagePath(caseStudy.images.cover)}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Subtle bottom gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* View CTA on hover */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t("viewCase")} &rarr;
                    </div>
                  </div>

                  {/* Metrics badge */}
                  {caseStudy.metrics && caseStudy.metrics[0] && (
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                      <div className="text-2xl font-black text-gray-900">
                        {caseStudy.metrics[0].value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {caseStudy.metrics[0].label}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-sm font-bold rounded-full border-2 border-primary-200">
                    {caseStudy.category}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500 font-medium">
                    {index === 0
                      ? "Featured"
                      : `Case Study ${index + 1}`}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {caseStudy.cardDescription}
                </p>

                {/* Read more link */}
                <div className="inline-flex items-center gap-2 text-primary-600 font-bold group-hover:gap-3 transition-all">
                  Read Case Study
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
