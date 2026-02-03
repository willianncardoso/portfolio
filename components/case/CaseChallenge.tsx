/**
 * COMPONENTE: CaseChallenge
 * Seção que descreve o problema/desafio do projeto
 */

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseChallenge as CaseChallengeType } from "@/types";

interface CaseChallengeProps {
  challenge: CaseChallengeType;
}

export function CaseChallenge({ challenge }: CaseChallengeProps) {
  return (
    <Section spacing="lg" background="gray">
      <Container size="md">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          The Challenge
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
          {challenge.description}
        </p>

        {/* Key points - numbered with gradient badges */}
        <div className="space-y-6 mb-12">
          {challenge.points.map((point, index) => (
            <div key={index} className="flex gap-6 items-start group">
              {/* Number badge */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white font-black text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              {/* Point text */}
              <p className="flex-1 text-lg text-gray-700 leading-relaxed pt-3">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Optional image */}
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
