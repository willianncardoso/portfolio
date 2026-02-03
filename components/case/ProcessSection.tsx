/**
 * COMPONENTE: ProcessSection
 * Visual process timeline with 5 numbered steps
 * Desktop: horizontal with connector lines
 * Mobile: vertical timeline
 */

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { ProcessStep } from "@/types";

interface ProcessSectionProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

export function ProcessSection({
  steps,
  title = "My Process",
  subtitle = "How I approached this project from discovery to delivery",
}: ProcessSectionProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <Section spacing="md" background="gray">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Desktop: horizontal layout */}
        <div className="hidden md:flex items-start justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step */}
              <div className="flex flex-col items-center text-center flex-1 max-w-[180px]">
                {/* Circle with number */}
                <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>

                {/* Title */}
                <h4 className="font-bold text-gray-900 mb-1 text-base uppercase tracking-wide">
                  {step.title}
                </h4>

                {/* Duration */}
                <span className="text-sm text-gray-500 mb-3 font-medium">
                  {step.duration}
                </span>

                {/* Bullets */}
                <ul className="text-sm text-gray-600 space-y-1.5">
                  {step.bullets.map((bullet, i) => (
                    <li key={i} className="leading-snug">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector line (not after last item) */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 flex items-center pt-7">
                  <div className="w-8 lg:w-16 h-0.5 bg-gray-300" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-[6px] border-t-transparent border-b-transparent border-l-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: Circle and vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                  {step.number}
                </div>
                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-300 mt-2" />
                )}
              </div>

              {/* Right: Content */}
              <div className="flex-1 pb-4">
                <h4 className="font-bold text-gray-900 text-base uppercase tracking-wide">
                  {step.title}
                </h4>
                <span className="text-sm text-gray-500 font-medium">
                  {step.duration}
                </span>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  {step.bullets.map((bullet, i) => (
                    <li key={i}>&#8226; {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
