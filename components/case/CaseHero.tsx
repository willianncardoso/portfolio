"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CaseStudy } from "@/types";
import { fadeInUp } from "@/lib/animations";
import { getImagePath } from "@/lib/image-path";

interface CaseHeroProps {
  caseStudy: CaseStudy;
}

export function CaseHero({ caseStudy }: CaseHeroProps) {
  const { title, category, description, images } = caseStudy;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0">
        <Image
          src={getImagePath(images.hero)}
          alt={images.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />
      </div>

      {/* Conteúdo */}
      <Container className="relative z-10 py-20">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge da categoria */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge variant="outline" className="border-white/30 text-white">
              {category}
            </Badge>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Descrição */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
