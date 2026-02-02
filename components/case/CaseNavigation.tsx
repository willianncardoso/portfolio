/**
 * ============================================
 * COMPONENTE: CaseNavigation
 * ============================================
 *
 * Navegação para o próximo case study.
 * Mostra preview do próximo projeto ou botão "Back to All Projects".
 *
 * PROPS:
 * - nextCaseId: string | null
 *
 * LAYOUT:
 * - Botão grande e centrado
 * - Se nextCaseId existe: mostra "Next Project: [Título]"
 * - Se null: mostra "Back to All Projects"
 */

import Link from "next/link";
import { ArrowRight, Grid3x3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { allCases } from "@/content/cases";

interface CaseNavigationProps {
  nextCaseId: string | null;
}

export function CaseNavigation({ nextCaseId }: CaseNavigationProps) {
  // Se não há próximo case, mostra link para voltar ao grid
  if (!nextCaseId) {
    return (
      <Section spacing="xl" background="white">
        <Container size="sm">
          <div className="text-center">
            <Link href="/#work">
              <Button variant="primary" size="lg" className="group">
                <Grid3x3 className="w-5 h-5 mr-2" />
                Back to All Projects
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  // Buscar dados do próximo case
  const nextCase = allCases.find((c) => c.id === nextCaseId);

  if (!nextCase) {
    return null; // Fallback se case não for encontrado
  }

  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-primary-600 mb-4">
            Next Project
          </p>

          <Link
            href={`/cases/${nextCase.id}`}
            aria-label={`View next project: ${nextCase.title}`}
            className="group block p-8 bg-white rounded-2xl shadow-sm border border-primary-100 hover:border-accent-500 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left flex-1">
                <p className="text-sm text-accent-500 font-medium mb-2">
                  {nextCase.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2 group-hover:text-accent-500 transition-colors">
                  {nextCase.title}
                </h3>
                <p className="text-base text-primary-600">
                  {nextCase.cardDescription}
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-accent-500 group-hover:translate-x-2 transition-transform flex-shrink-0" aria-hidden="true" />
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
