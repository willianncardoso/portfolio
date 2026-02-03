/**
 * COMPONENTE: CaseNavigation
 * Enhanced navigation to next case study
 */

"use client";

import { ArrowRight, Grid3x3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { allCases } from "@/content/cases";
import { Link } from "@/i18n/routing";

interface CaseNavigationProps {
  nextCaseId: string | null;
}

export function CaseNavigation({ nextCaseId }: CaseNavigationProps) {
  if (!nextCaseId) {
    return (
      <Section spacing="lg" background="white">
        <Container size="sm">
          <div className="text-center">
            <Link
              href="/#work"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <Grid3x3 className="w-5 h-5" />
              Back to All Projects
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const nextCase = allCases.find((c) => c.id === nextCaseId);
  if (!nextCase) return null;

  return (
    <Section spacing="lg" background="white">
      <Container size="md">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold text-primary-600 uppercase tracking-widest">
              Next Project
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-500 to-transparent" />
          </div>

          <Link
            href={`/cases/${nextCase.id}`}
            className="group block"
          >
            <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 hover:border-primary-500 transition-all hover:shadow-2xl">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-sm font-bold rounded-full">
                    {nextCase.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {nextCase.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {nextCase.cardDescription}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
