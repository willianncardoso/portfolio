/**
 * COMPONENTE: CaseReflection
 * Takeaways + Next Steps section
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseReflection as CaseReflectionType } from "@/types";

interface CaseReflectionProps {
  data: CaseReflectionType;
}

export function CaseReflection({ data }: CaseReflectionProps) {
  return (
    <Section spacing="md" background="white">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          Reflection
        </h2>

        {/* Takeaways */}
        <div className="space-y-8 mb-16">
          {data.takeaways.map((takeaway, i) => (
            <div key={i} className="border-l-4 border-gray-900 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {takeaway.title}
              </h4>
              <p className="text-base text-gray-600 leading-relaxed">
                {takeaway.description}
              </p>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        {data.nextSteps.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              What I&apos;d Explore Next
            </h3>
            <ul className="space-y-3">
              {data.nextSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base text-gray-600"
                >
                  <span className="text-gray-500 mt-0.5">&rarr;</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
