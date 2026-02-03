/**
 * COMPONENTE: CaseWhyRedesign
 * Problem framing section with numbered issues
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseWhyRedesign as CaseWhyRedesignType } from "@/types";

interface CaseWhyRedesignProps {
  data: CaseWhyRedesignType;
}

export function CaseWhyRedesign({ data }: CaseWhyRedesignProps) {
  return (
    <Section spacing="md" background="gray">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Redesign
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
          {data.intro}
        </p>

        <div className="space-y-6">
          {data.problems.map((problem) => (
            <div key={problem.number} className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {problem.number}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {problem.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {data.conclusion && (
          <p className="text-lg text-gray-700 font-medium mt-10 pt-8 border-t border-gray-200">
            {data.conclusion}
          </p>
        )}
      </Container>
    </Section>
  );
}
