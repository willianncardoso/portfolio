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
              <Card hover padding="none" className="overflow-hidden group">
                {/* Imagem do case com gradient overlay */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                  <Image
                    src={caseItem.images.cover}
                    alt={caseItem.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay escuro para melhor legibilidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Badge de categoria sobre a imagem */}
                  <div className="absolute top-4 left-4">
                    <Badge size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      {caseItem.category}
                    </Badge>
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-500 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-primary-600">{caseItem.cardDescription}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
