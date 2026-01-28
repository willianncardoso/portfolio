/**
 * ============================================
 * COMPONENTE: CaseHero
 * ============================================
 *
 * Hero section da página de case study.
 * Mostra imagem de fundo com overlay, título, subtítulo e metadata do projeto.
 *
 * PROPS:
 * - case: CaseStudy completo
 *
 * LAYOUT:
 * - Full-width com imagem de fundo
 * - Overlay escuro para legibilidade
 * - Badge de categoria no topo
 * - Título e subtítulo centralizados
 * - Metadata em grid (role, timeline, team, company)
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CaseStudy } from "@/types";
import { fadeInUp } from "@/lib/animations";

interface CaseHeroProps {
  caseStudy: CaseStudy;
}

export function CaseHero({ caseStudy }: CaseHeroProps) {
  const { category, title, subtitle, images, metadata } = caseStudy;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt={images.heroAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Overlay gradient para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Conteúdo */}
      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de categoria */}
          <motion.div {...fadeInUp} className="mb-6">
            <Badge size="md" variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {category}
            </Badge>
          </motion.div>

          {/* Título */}
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Metadata Grid */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            <div className="text-left">
              <p className="text-sm text-white/60 mb-1">Role</p>
              <p className="text-sm md:text-base text-white font-medium">{metadata.role}</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-white/60 mb-1">Timeline</p>
              <p className="text-sm md:text-base text-white font-medium">{metadata.timeline}</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-white/60 mb-1">Team</p>
              <p className="text-sm md:text-base text-white font-medium">{metadata.team}</p>
            </div>
            <div className="text-left">
              <p className="text-sm text-white/60 mb-1">Company</p>
              <p className="text-sm md:text-base text-white font-medium">
                {metadata.client || metadata.company}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
