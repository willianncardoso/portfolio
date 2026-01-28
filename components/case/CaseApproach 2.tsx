/**
 * ============================================
 * COMPONENTE: CaseApproach
 * ============================================
 *
 * Timeline vertical do processo de design.
 * Mostra as etapas do approach com números, descrições e imagens.
 *
 * PROPS:
 * - steps: Array de CaseApproachStep[]
 *
 * LAYOUT:
 * - Timeline vertical com linha conectora
 * - Cada step: número em círculo + título + descrição + imagem (opcional)
 * - Alternância de layout da imagem (esquerda/direita) em desktop
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CaseApproachStep } from "@/types";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface CaseApproachProps {
  steps: CaseApproachStep[];
}

export function CaseApproach({ steps }: CaseApproachProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <Section spacing="xl" background="white">
      <Container size="md">
        <motion.div {...fadeInUp}>
          <SectionTitle align="left">My Approach</SectionTitle>
        </motion.div>

        <motion.div {...staggerContainer} className="relative mt-12 space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                {...staggerItem}
                className="relative"
              >
                {/* Linha vertical conectora (exceto no último) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary-200 -z-10" />
                )}

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Número em círculo */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center text-xl font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Conteúdo do step */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-primary-700 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Imagem opcional */}
                    {step.image && (
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={step.image}
                          alt={step.imageAlt || step.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    )}

                    {/* Caption da imagem */}
                    {step.imageCaption && (
                      <p className="text-sm text-primary-600 italic mt-3">
                        {step.imageCaption}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
