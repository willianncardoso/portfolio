/**
 * COMPONENTE: HeroSection (Seção principal da home)
 * Primeira seção com headline grande, descrição e CTAs
 */

"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-white to-primary-50/30 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl -z-10" />
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge de disponibilidade */}
          {siteConfig.availability.isAvailable && (
            <div>
              <Badge variant="success" size="md">
                {t("badge")}
              </Badge>
            </div>
          )}

          {/* Headline principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-900 leading-[1.1] tracking-tight">
            {t("headline")}
          </h1>

          {/* Descrição */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button href="#work" size="lg" id="view-work-cta">
              {t("primaryCTA")}
              <ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </Button>
            {siteConfig.links.linkedin && (
              <Button
                href={siteConfig.links.linkedin}
                external
                variant="secondary"
                size="lg"
              >
                {t("secondaryCTA")}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
