/**
 * COMPONENTE: CaseImpact
 * Metrics, ecosystem impact, and optional quote
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseImpact as CaseImpactType } from "@/types";

interface CaseImpactProps {
  data: CaseImpactType;
}

export function CaseImpact({ data }: CaseImpactProps) {
  return (
    <Section spacing="md" background="gray">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {data.sectionTitle || "Impact"}
        </h2>
        <p className="text-xl text-gray-600 mb-4 max-w-3xl">
          {data.headline}
        </p>
        {data.disclaimer && (
          <p className="text-sm text-gray-500 italic mb-12">
            * {data.disclaimer}
          </p>
        )}
        {!data.disclaimer && <div className="mb-8" />}

        {/* Primary metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-base font-bold text-gray-700 mb-1">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-sm text-gray-500">{metric.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Ecosystem impact */}
        {data.ecosystemImpact && data.ecosystemImpact.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {data.ecosystemImpact.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100"
              >
                <div className="text-2xl font-black text-gray-900 flex-shrink-0">
                  {item.value}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-sm text-gray-500">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quote */}
        {data.quote && (
          <blockquote className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <p className="text-xl text-gray-800 italic leading-relaxed mb-4">
              &ldquo;{data.quote.text}&rdquo;
            </p>
            <cite className="text-sm text-gray-500 font-medium not-italic">
              &mdash; {data.quote.author}
            </cite>
          </blockquote>
        )}
      </Container>
    </Section>
  );
}
