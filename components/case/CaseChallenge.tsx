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

        {/* Key points - numbered */}
        <div className="space-y-6 mb-12">
          {challenge.points.map((point, index) => (
            <div key={index} className="flex gap-5 items-start">
              {/* Number badge */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center mt-0.5">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>

              {/* Point text */}
              <p className="flex-1 text-lg text-gray-700 leading-relaxed">
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
