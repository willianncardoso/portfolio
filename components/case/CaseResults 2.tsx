/**
 * ============================================
 * COMPONENTE: CaseResults
 * ============================================
 *
 * Lista de resultados e impactos do projeto.
 * Cada resultado com ícone de check e suporte a markdown bold (**texto**).
 *
 * PROPS:
 * - results: Array de strings (pode conter **bold** inline)
 *
 * LAYOUT:
 * - Lista com ícones CheckCircle2
 * - Background com gradiente sutil
 * - Typography destacada para valores em bold
 */

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { fadeInUp } from "@/lib/animations";

interface CaseResultsProps {
  results: string[];
}

/**
 * Helper para renderizar texto com **bold** inline
 */
function renderMarkdownBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-accent-500">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function CaseResults({ results }: CaseResultsProps) {
  if (!results || results.length === 0) return null;

  return (
    <Section spacing="xl" background="white">
      <Container size="md">
        <motion.div {...fadeInUp}>
          <SectionTitle align="left">Results & Impact</SectionTitle>
        </motion.div>

        <motion.ul
          {...staggerContainer}
          className="space-y-6 mt-12 max-w-3xl"
        >
          {results.map((result, index) => (
            <motion.li
              key={index}
              {...staggerItem}
              className="flex items-start gap-4"
            >
              <CheckCircle2 className="w-7 h-7 text-success-500 flex-shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-primary-700 leading-relaxed">
                {renderMarkdownBold(result)}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}
