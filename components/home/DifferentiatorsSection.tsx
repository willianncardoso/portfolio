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
    gradient: "from-primary-500 to-primary-600",
    span: "col-span-1 md:col-span-2 row-span-2",
    large: true,
  },
  {
    key: "code" as const,
    icon: Code2,
    gradient: "from-accent-500 to-accent-600",
    span: "col-span-1 md:col-span-2 row-span-1",
    large: false,
  },
  {
    key: "research" as const,
    icon: Brain,
    gradient: "from-purple-500 to-purple-600",
    span: "col-span-1 row-span-1",
    large: false,
  },
  {
    key: "global" as const,
    icon: Globe,
    gradient: "from-pink-500 to-pink-600",
    span: "col-span-1 row-span-1",
    large: false,
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px] md:auto-rows-[200px]">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.key}
                className={`${item.span} bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow overflow-hidden relative group`}
              >
                {/* Background decoration */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="h-full flex flex-col justify-between relative z-10">
                  <IconComponent
                    className={item.large ? "w-12 h-12" : "w-10 h-10"}
                  />
                  <div>
                    <h3
                      className={`${item.large ? "text-2xl md:text-3xl" : "text-xl"} font-bold mb-2`}
                    >
                      {t(`items.${item.key}.title`)}
                    </h3>
                    {item.large && (
                      <p className="text-white/90 leading-relaxed text-sm md:text-base line-clamp-3">
                        {t(`items.${item.key}.description`)}
                      </p>
                    )}
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
