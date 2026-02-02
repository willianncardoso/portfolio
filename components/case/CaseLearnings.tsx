/**
 * ============================================
 * COMPONENTE: CaseLearnings
 * ============================================
 *
 * Seção de aprendizados do projeto (Key Learnings/Takeaways).
 * Caixa destacada com fundo accent e ícone de lâmpada.
 *
 * PROPS:
 * - learnings: Array de strings (aprendizados)
 *
 * LAYOUT:
 * - Background accent ou cinza escuro
 * - Ícone Lightbulb
 * - Lista de aprendizados
 * - Typography mais pessoal (italic)
 */

import { Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CaseLearningsProps {
  learnings: string[];
}

export function CaseLearnings({ learnings }: CaseLearningsProps) {
  if (!learnings || learnings.length === 0) return null;

  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <SectionTitle align="left">Key Learnings</SectionTitle>

        <div className="mt-12 p-8 md:p-12 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl border-l-4 border-accent-500">
          <div className="flex items-start gap-4 mb-6">
            <Lightbulb className="w-8 h-8 text-accent-600 flex-shrink-0" />
            <div className="flex-1">
              <ul className="space-y-6">
                {learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="text-base md:text-lg text-primary-800 leading-relaxed italic"
                  >
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
