/**
 * COMPONENTE: DifferentiatorsSection
 * Bento grid showing professional differentiators
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
    gradient: "from-indigo-600 to-indigo-700",
    span: "col-span-1 md:col-span-2",
  },
  {
    key: "code" as const,
    icon: Code2,
    gradient: "from-teal-600 to-cyan-700",
    span: "col-span-1 md:col-span-2",
  },
  {
    key: "research" as const,
    icon: Brain,
    gradient: "from-purple-600 to-violet-700",
    span: "col-span-1 md:col-span-2",
  },
  {
    key: "global" as const,
    icon: Globe,
    gradient: "from-pink-600 to-rose-700",
    span: "col-span-1 md:col-span-2",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.key}
                className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow overflow-hidden relative group`}
              >
                {/* Background decoration */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />

                <div className="flex flex-col gap-4 relative z-10">
                  <IconComponent className="w-10 h-10 drop-shadow-sm" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                      {t(`items.${item.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
