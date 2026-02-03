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

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CaseChallenge as CaseChallengeType } from "@/types";

interface CaseChallengeProps {
  challenge: CaseChallengeType;
}

export function CaseChallenge({ challenge }: CaseChallengeProps) {
  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <SectionTitle align="left">The Challenge</SectionTitle>

        {/* Descrição */}
        <p className="text-base md:text-lg text-primary-700 leading-relaxed mb-8 max-w-3xl">
          {challenge.description}
        </p>

        {/* Lista de pontos do problema */}
        <ol className="space-y-4 mb-12">
          {challenge.points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-base md:text-lg text-primary-700"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold flex items-center justify-center text-sm">
                {index + 1}
              </span>
              <span className="flex-1 pt-1">{point}</span>
            </li>
          ))}
        </ol>

        {/* Imagem opcional */}
        {challenge.image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={challenge.image}
              alt={challenge.imageAlt || "Challenge illustration"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}
      </Container>
    </Section>
  );
}
