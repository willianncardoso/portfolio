/**
 * COMPONENTE: CaseKeyDecisions
 * Design decisions with problem/solution/trade-off/outcome
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { CaseKeyDecision } from "@/types";

interface CaseKeyDecisionsProps {
  decisions: CaseKeyDecision[];
}

export function CaseKeyDecisions({ decisions }: CaseKeyDecisionsProps) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <Section spacing="md" background="white">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          Key Design Decisions
        </h2>

        <div className="space-y-16">
          {decisions.map((decision) => (
            <div key={decision.number} className="relative">
              {/* Decision number + title */}
              <div className="flex items-start gap-4 mb-8">
                <span className="flex-shrink-0 text-5xl font-black text-gray-200 leading-none">
                  {decision.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 pt-2">
                  {decision.title}
                </h3>
              </div>

              {/* Grid: Problem → Solution → Trade-off → Outcome */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h4 className="text-sm font-bold text-red-800 uppercase tracking-widest mb-2">
                    Problem
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {decision.problem}
                  </p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-2">
                    Solution
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {decision.solution}
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <h4 className="text-sm font-bold text-amber-800 uppercase tracking-widest mb-2">
                    Trade-off
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {decision.tradeOff}
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-2">
                    Outcome
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {decision.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
