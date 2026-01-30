/**
 * COMPONENTE: HeroSection (Seção principal da home)
 * Primeira seção com headline grande, descrição e CTAs
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";
import { homeContent } from "@/content/home-content";
import { fadeInUp, fadeInDown } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/50 via-white to-primary-50/30 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl -z-10" />
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge de disponibilidade */}
          {siteConfig.availability.isAvailable && (
            <motion.div {...fadeInDown}>
              <Badge variant="success" size="md">
                {siteConfig.availability.badgeText}
              </Badge>
            </motion.div>
          )}

          {/* Headline principal */}
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight"
          >
            {homeContent.hero.headline}
          </motion.h1>

          {/* Descrição */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-600 max-w-2xl mx-auto"
          >
            {homeContent.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button href="#work" size="lg" id="view-work-cta">
              {homeContent.hero.primaryCTA}
              <ArrowRight className="ml-2" size={20} aria-hidden="true" />
            </Button>
            {siteConfig.links.linkedin && (
              <Button
                href={siteConfig.links.linkedin}
                external
                variant="secondary"
                size="lg"
              >
                {homeContent.hero.secondaryCTA}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
