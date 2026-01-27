/**
 * COMPONENTE: DifferentiatorsSection
 * Cards mostrando diferenciais profissionais
 */

"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home-content";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function DifferentiatorsSection() {
  return (
    <Section id="differentiators" spacing="lg" background="gray">
      <Container>
        <SectionTitle align="center" subtitle={homeContent.differentiators.sectionSubtitle}>
          {homeContent.differentiators.sectionTitle}
        </SectionTitle>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {homeContent.differentiators.items.map((item, index) => {
            const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[item.icon] || Icons.Box;
            
            return (
              <motion.div key={index} {...staggerItem}>
                <Card hover padding="lg" className="h-full">
                  <IconComponent className="text-accent-500 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-primary-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
