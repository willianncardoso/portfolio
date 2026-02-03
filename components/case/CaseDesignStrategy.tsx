/**
 * COMPONENTE: CaseDesignStrategy
 * Methodology overview section (optional)
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseDesignStrategy as CaseDesignStrategyType } from "@/types";

interface CaseDesignStrategyProps {
  data: CaseDesignStrategyType;
}

export function CaseDesignStrategy({ data }: CaseDesignStrategyProps) {
  return (
    <Section spacing="md" background="white">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Design Strategy
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
          {data.intro}
        </p>

        {data.insight && (
          <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-10">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              {data.insight}
            </p>
          </blockquote>
        )}

        {data.approach && (
          <p className="text-base text-gray-600 leading-relaxed mb-10">
            {data.approach}
          </p>
        )}

        {data.phases && data.phases.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {data.phases.map((phase, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
