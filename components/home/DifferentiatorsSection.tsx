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

// Map icon names to components and gradient colors
const iconConfig = {
  enterprise: { icon: Building2, gradient: "from-accent-400 to-accent-600" },
  code: { icon: Code2, gradient: "from-purple-400 to-purple-600" },
  research: { icon: Brain, gradient: "from-pink-400 to-pink-600" },
  global: { icon: Globe, gradient: "from-amber-400 to-orange-500" },
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
            const { icon: IconComponent, gradient } = iconConfig[key];

            return (
              <Card key={key} hover padding="lg" className="h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-4 shadow-sm`}>
                  <IconComponent
                    className="text-white"
                    size={24}
                    aria-hidden="true"
                  />
                </div>
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
