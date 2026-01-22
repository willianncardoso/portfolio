"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { homeContent } from "@/content/home-content";
import { getFeaturedCases } from "@/content/cases";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function CasesGridSection() {
  const featuredCases = getFeaturedCases(homeContent.featuredWork.caseIds);

  return (
    <Section id="work" spacing="xl">
      <Container>
        <SectionTitle subtitle={homeContent.featuredWork.sectionSubtitle}>
          {homeContent.featuredWork.sectionTitle}
        </SectionTitle>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {featuredCases.map((caseItem) => (
            <motion.div key={caseItem.id} {...staggerItem}>
              <Link href={`/cases/${caseItem.id}`}>
                <Card hover padding="none" className="overflow-hidden group">
                  <div className="relative aspect-[16/10] bg-primary-100">
                    {/* Placeholder para imagem */}
                    <div className="w-full h-full flex items-center justify-center text-primary-400">
                      Image: {caseItem.title}
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge size="sm" className="mb-3">{caseItem.category}</Badge>
                    <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-500 transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-primary-600">{caseItem.cardDescription}</p>
                    <div className="mt-4 flex items-center text-accent-500 font-medium">
                      View case study <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
