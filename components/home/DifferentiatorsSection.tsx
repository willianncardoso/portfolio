/**
 * COMPONENTE: DifferentiatorsSection
 * Cards mostrando diferenciais profissionais
 */

"use client";

import { useTranslations } from "next-intl";
import { Building2, Code2, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Map icon names to components
const iconMap = {
  enterprise: Building2,
  code: Code2,
  research: Brain,
  global: Globe,
};

const itemKeys = ["enterprise", "code", "research", "global"] as const;

export function DifferentiatorsSection() {
  const t = useTranslations("differentiators");

  return (
    <Section id="differentiators" spacing="lg" background="gray">
      <Container>
        <SectionTitle align="center" subtitle={t("subtitle")}>
          {t("title")}
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {itemKeys.map((key) => {
            const IconComponent = iconMap[key];

            return (
              <Card key={key} hover padding="lg" className="h-full">
                <IconComponent
                  className="text-accent-500 mb-4"
                  size={32}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
