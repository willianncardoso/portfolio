/**
 * COMPONENTE: DifferentiatorsSection
 * Neutral cards with colored left border accents
 */

"use client";

import { useTranslations } from "next-intl";
import { Building2, Code2, Brain, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";

const items = [
  {
    key: "enterprise" as const,
    icon: Building2,
    borderColor: "border-l-indigo-500",
    iconColor: "text-indigo-600",
  },
  {
    key: "code" as const,
    icon: Code2,
    borderColor: "border-l-teal-500",
    iconColor: "text-teal-600",
  },
  {
    key: "research" as const,
    icon: Brain,
    borderColor: "border-l-purple-500",
    iconColor: "text-purple-600",
  },
  {
    key: "global" as const,
    icon: Globe,
    borderColor: "border-l-rose-500",
    iconColor: "text-rose-600",
  },
];

export function DifferentiatorsSection() {
  const t = useTranslations("differentiators");

  return (
    <Section id="differentiators" spacing="lg" background="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.key}
                className={`bg-white border border-gray-200 ${item.borderColor} border-l-4 rounded-xl p-6 hover:shadow-lg transition-shadow`}
              >
                <IconComponent
                  className={`w-6 h-6 ${item.iconColor} mb-4`}
                  aria-hidden="true"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`items.${item.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
