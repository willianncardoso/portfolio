/**
 * COMPONENTE: HeroSection (Seção principal da home)
 * Full-screen hero with headline, photo, CTAs and trust indicators
 */

"use client";

import Image from "next/image";
import { ArrowRight, Briefcase, Code2, Building2, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { getImagePath } from "@/lib/image-path";
import { Link } from "@/i18n/routing";

const trustBadges = [
  { icon: Briefcase, label: "7+ years", sublabel: "Experience" },
  { icon: Building2, label: "IBM", sublabel: "Enterprise SaaS" },
  { icon: Code2, label: "Python + JS", sublabel: "Technical" },
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />

      {/* Large animated blobs (decorative) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/25 to-purple-400/25 rounded-full blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-400/25 to-pink-400/25 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-300/20 to-accent-300/20 rounded-full blur-3xl animate-blob animation-delay-4000" aria-hidden="true" />

      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-[1.4fr_1fr] xl:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-3xl">
            {/* Status badge with pulse */}
            {siteConfig.availability.isAvailable && (
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-gray-200 bg-white/50 text-gray-600 rounded-full mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium">
                  Open to Remote Opportunities
                </span>
              </div>
            )}

            {/* HUGE headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-10">
              {t("headline").split("actually").length > 1 ? (
                <>
                  {t("headline").split("actually")[0]}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary-700 via-purple-600 to-accent-500 bg-clip-text text-transparent">
                      actually
                    </span>
                    {/* Gradient underline */}
                    <svg
                      className="absolute -bottom-3 left-0 w-full"
                      viewBox="0 0 300 14"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 9 Q 150 3, 295 9"
                        stroke="url(#hero-underline)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="hero-underline"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  {t("headline").split("actually")[1]}
                </>
              ) : (
                t("headline")
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
              {t("description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                {t("primaryCTA")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("secondaryCTA")} (opens in new tab)`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A66C2] text-white rounded-xl font-bold text-lg hover:bg-[#004182] transition-colors"
                >
                  {t("secondaryCTA")}
                </a>
              )}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{badge.label}</div>
                    <div className="text-xs text-gray-500">{badge.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo with decorative elements */}
          <div className="relative hidden lg:flex justify-center">
            {/* Main photo */}
            <div className="relative z-10 max-w-xs lg:max-w-sm xl:max-w-md w-full">
              <div className="aspect-square relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src={getImagePath("/images/willian-photo.jpg")}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Glow behind photo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 rounded-[3rem] blur-3xl opacity-20 -z-10" aria-hidden="true" />

              {/* Geometric accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-2xl rotate-12 opacity-40 -z-20" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl -rotate-12 opacity-30 -z-20" />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-gray-500" />
      </div>
    </section>
  );
}
