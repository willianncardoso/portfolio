"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { allCases } from "@/content/cases";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { getImagePath } from "@/lib/image-path";

export function CasesGridSection() {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle badge="Featured Work">
          Selected projects showcasing my approach to enterprise product design.
        </SectionTitle>

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
                {/* Thumbnail da imagem */}
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={getImagePath(caseStudy.thumbnail)}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {caseStudy.category}
                  </Badge>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {caseStudy.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-2">
                    {caseStudy.description}
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
