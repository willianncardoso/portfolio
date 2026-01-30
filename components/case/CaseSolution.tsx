/**
 * ============================================
 * COMPONENTE: CaseSolution
 * ============================================
 *
 * Seção que apresenta a solução implementada.
 * Mostra descrição + grid de highlights + imagem principal opcional.
 *
 * PROPS:
 * - solution: CaseSolution (description, highlights, mainImage?)
 *
 * LAYOUT:
 * - Título "The Solution"
 * - Descrição introdutória
 * - Grid 2 colunas de highlights (cards com título + descrição + imagem)
 * - Imagem principal em destaque no final
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { ImageWithLightbox } from "@/components/ui/ImageWithLightbox";
import { CaseSolution as CaseSolutionType } from "@/types";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface CaseSolutionProps {
  solution: CaseSolutionType;
}

export function CaseSolution({ solution }: CaseSolutionProps) {
  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <motion.div {...fadeInUp}>
          <SectionTitle align="left">The Solution</SectionTitle>
        </motion.div>

        {/* Descrição */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-primary-700 leading-relaxed mb-12 max-w-3xl"
        >
          {solution.description}
        </motion.p>

        {/* Grid de highlights */}
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {solution.highlights.map((highlight, index) => (
            <motion.div key={index} {...staggerItem}>
              <Card padding="lg" className="h-full">
                <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-base text-primary-700 leading-relaxed mb-6">
                  {highlight.description}
                </p>

                {/* Imagem do highlight com lightbox */}
                {highlight.image && (
                  <ImageWithLightbox
                    src={highlight.image}
                    alt={highlight.imageAlt || highlight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    containerClassName="relative aspect-video"
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Imagem principal com lightbox */}
        {solution.mainImage && (
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <ImageWithLightbox
              src={solution.mainImage}
              alt={solution.mainImageAlt || "Solution"}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              containerClassName="relative aspect-video rounded-2xl shadow-2xl"
              caption={solution.mainImageCaption}
            />
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
