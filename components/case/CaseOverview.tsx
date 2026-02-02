/**
 * ============================================
 * COMPONENTE: CaseOverview
 * ============================================
 *
 * Seção de introdução/overview do case study.
 * Exibe parágrafos introdutórios sobre o projeto.
 *
 * PROPS:
 * - content: Array de strings (parágrafos)
 *
 * LAYOUT:
 * - Container com max-width médio (prosa)
 * - Typography text-lg com leading relaxed
 * - Parágrafos com espaçamento vertical
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

interface CaseOverviewProps {
  content: string[];
}

export function CaseOverview({ content }: CaseOverviewProps) {
  if (!content || content.length === 0) return null;

  return (
    <Section spacing="lg" background="white">
      <Container size="md">
        <div className="max-w-3xl mx-auto space-y-6">
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg text-primary-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
