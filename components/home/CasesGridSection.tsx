/**
 * COMPONENTE: CasesGridSection
 * Grid de cases em destaque
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { allCases } from "@/content/cases";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getImagePath } from "@/lib/image-path";

export function CasesGridSection() {
  const t = useTranslations("featuredWork");

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle badge={t("title")}>{t("subtitle")}</SectionTitle>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {allCases.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={staggerItem}>
              <Link
                href={`/cases/${caseStudy.id}`}
                className="group block relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={getImagePath(caseStudy.images.cover)}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <Badge className="mb-3">{caseStudy.category}</Badge>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {caseStudy.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-2">
                    {caseStudy.cardDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
