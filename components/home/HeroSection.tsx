/**
 * COMPONENTE: HeroSection (Seção principal da home)
 * Primeira seção com headline grande, descrição e CTAs
 */

"use client";

import { ArrowRight, Sparkles, Code2, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-accent-50/30 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-40 right-40 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: "4s" }} />

      <Container className="py-20 relative z-10">
        <div className="max-w-5xl">
          {/* Status Badge - Eye-catching */}
          {siteConfig.availability.isAvailable && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full mb-8 border border-accent-200/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500" />
              </span>
              <span className="text-sm font-medium text-gray-800">
                {t("badge")}
              </span>
            </div>
          )}

          {/* Headline - HUGE and Bold */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            {t("headline").split("actually").length > 1 ? (
              <>
                {t("headline").split("actually")[0]}
                <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                  actually
                </span>
                {t("headline").split("actually")[1]}
              </>
            ) : (
              t("headline")
            )}
          </h1>

          {/* Subtitle - Clear and specific */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
            {t("description")}
          </p>

          {/* CTA Buttons - Strong hierarchy */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              href="#work"
              size="lg"
              id="view-work-cta"
              className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all"
              >
                {t("secondaryCTA")}
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-500" />
                <span className="font-medium">7+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent-500" />
                <span className="font-medium">IBM • Enterprise SaaS</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent-500" />
                <span className="font-medium">Python • JavaScript/Vue</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
