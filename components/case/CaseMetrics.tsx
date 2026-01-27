/**
 * ============================================
 * COMPONENTE: CaseMetrics
 * ============================================
 *
 * Grid de métricas de impacto do projeto.
 * Mostra valores grandes e destacados (ex: "40%", "$2B+", "+25").
 *
 * PROPS:
 * - metrics: Array de CaseMetric[]
 *
 * LAYOUT:
 * - Grid 3 colunas (1 col em mobile)
 * - Cards com valor grande + label descritiva
 * - Background cinza claro
 */

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseMetric } from "@/types";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface CaseMetricsProps {
  metrics: CaseMetric[];
}

export function CaseMetrics({ metrics }: CaseMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <Section spacing="lg" background="gray">
      <Container size="md">
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              {...staggerItem}
              className="text-center p-8 bg-white rounded-2xl shadow-sm border border-primary-100"
            >
              {/* Valor da métrica */}
              <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                {metric.value}
              </div>

              {/* Label/descrição */}
              <div className="text-sm md:text-base text-primary-600">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
