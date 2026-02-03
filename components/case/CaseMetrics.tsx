/**
 * COMPONENTE: CaseMetrics
 * Grid de métricas de impacto com números grandes
 */

import { TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseMetric } from "@/types";

interface CaseMetricsProps {
  metrics: CaseMetric[];
}

export function CaseMetrics({ metrics }: CaseMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <Section spacing="md" background="gray">
      <Container size="md">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Impact & Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Measurable improvements that made a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 overflow-hidden relative h-full min-h-[160px]">
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-white" aria-hidden="true" />
              </div>

              {/* BIG number */}
              <div className="text-3xl md:text-4xl font-black mb-2 text-gray-900 leading-none">
                {metric.value}
              </div>

              {/* Label */}
              <p className="text-sm text-gray-600 leading-relaxed font-medium mt-auto">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
