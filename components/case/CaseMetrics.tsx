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
    <Section spacing="lg" background="gray">
      <Container size="md">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Impact & Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Measurable improvements that made a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-200 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-8">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>

                {/* BIG number */}
                <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-br from-primary-600 to-accent-600 bg-clip-text text-transparent leading-none">
                  {metric.value}
                </div>

                {/* Label */}
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {metric.label}
                </p>
              </div>

              {/* Decorative gradient line on hover */}
              <div className="absolute -bottom-2 left-10 right-10 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
