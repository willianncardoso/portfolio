/**
 * ============================================
 * COMPONENTE: CaseChallenge
 * ============================================
 *
 * Seção que descreve o problema/desafio do projeto.
 * Mostra descrição + lista de bullet points + imagem opcional.
 *
 * PROPS:
 * - challenge: CaseChallenge (description, points, image?, imageAlt?)
 *
 * LAYOUT:
 * - Título da seção "The Challenge"
 * - Descrição do problema
 * - Lista de pontos com ícones AlertCircle
 * - Imagem opcional (se fornecida)
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CaseChallenge as CaseChallengeType } from "@/types";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface CaseChallengeProps {
  challenge: CaseChallengeType;
}

export function CaseChallenge({ challenge }: CaseChallengeProps) {
  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <motion.div {...fadeInUp}>
          <SectionTitle align="left">The Challenge</SectionTitle>
        </motion.div>

        {/* Descrição */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-primary-700 leading-relaxed mb-8 max-w-3xl"
        >
          {challenge.description}
        </motion.p>

        {/* Lista de pontos do problema */}
        <motion.ul {...staggerContainer} className="space-y-4 mb-12">
          {challenge.points.map((point, index) => (
            <motion.li
              key={index}
              {...staggerItem}
              className="flex items-start gap-3 text-base md:text-lg text-primary-700"
            >
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Imagem opcional */}
        {challenge.image && (
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={challenge.image}
              alt={challenge.imageAlt || "Challenge illustration"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
