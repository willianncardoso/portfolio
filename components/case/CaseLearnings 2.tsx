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

"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { fadeInUp } from "@/lib/animations";

interface CaseLearningsProps {
  learnings: string[];
}

export function CaseLearnings({ learnings }: CaseLearningsProps) {
  if (!learnings || learnings.length === 0) return null;

  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <motion.div {...fadeInUp}>
          <SectionTitle align="left">Key Learnings</SectionTitle>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-12 p-8 md:p-12 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl border-l-4 border-accent-500"
        >
          <div className="flex items-start gap-4 mb-6">
            <Lightbulb className="w-8 h-8 text-accent-600 flex-shrink-0" />
            <div className="flex-1">
              <motion.ul {...staggerContainer} className="space-y-6">
                {learnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    {...staggerItem}
                    className="text-base md:text-lg text-primary-800 leading-relaxed italic"
                  >
                    {learning}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
