/**
 * COMPONENTE: HeroSection (Seção principal da home)
 * Primeira seção com headline grande, foto, descrição e CTAs
 */

"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Code2, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { getImagePath } from "@/lib/image-path";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-accent-50/40 via-white to-purple-50/30 overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob" />
      <div className="absolute top-40 right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000" />

      <Container className="py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-3xl">
            {/* Status Badge */}
            {siteConfig.availability.isAvailable && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-full mb-8 border border-accent-300/40">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500" />
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {t("badge")}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {t("headline").split("actually").length > 1 ? (
                <>
                  {t("headline").split("actually")[0]}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
                      actually
                    </span>
                    {/* SVG underline decoration */}
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 8C30 3 60 2 100 5C140 8 170 4 198 2" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#06b6d4" />
                          <stop offset="1" stopColor="#9333ea" />
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
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              {t("description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                href="#work"
                size="lg"
                id="view-work-cta"
                className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-accent-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t("primaryCTA")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
              </Button>
              {siteConfig.links.linkedin && (
                <Button
                  href={siteConfig.links.linkedin}
                  external
                  variant="secondary"
                  size="lg"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-accent-500 hover:text-accent-600 transition-all"
                >
                  {t("secondaryCTA")}
                </Button>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">7+ years experience</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">IBM • Enterprise SaaS</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Python • JavaScript/Vue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0">
            {/* Gradient ring behind photo */}
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-400 via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src={getImagePath("/images/willian-photo.jpg")}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-200 to-purple-200 rounded-full opacity-60 -z-10" />
            <div className="absolute -top-2 -left-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-accent-200 rounded-full opacity-50 -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
