/**
 * ============================================
 * COMPONENTE: CaseSolution
 * ============================================
 *
 * Seção que apresenta a solução implementada.
 * Mostra descrição + grid de highlights + imagem principal opcional.
 *
 * PROPS:
 * - solution: CaseSolution (description, highlights, mainImage?)
 *
 * LAYOUT:
 * - Título "The Solution"
 * - Descrição introdutória
 * - Grid 2 colunas de highlights (cards com título + descrição + imagem)
 * - Imagem principal em destaque no final
 */

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { ImageWithLightbox } from "@/components/ui/ImageWithLightbox";
import { CaseSolution as CaseSolutionType } from "@/types";

interface CaseSolutionProps {
  solution: CaseSolutionType;
}

export function CaseSolution({ solution }: CaseSolutionProps) {
  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <SectionTitle align="left">The Solution</SectionTitle>

        {/* Descrição */}
        <p className="text-base md:text-lg text-primary-700 leading-relaxed mb-12 max-w-3xl">
          {solution.description}
        </p>

        {/* Grid de highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solution.highlights.map((highlight, index) => (
            <Card key={index} padding="lg" className="h-full">
              <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-4">
                {highlight.title}
              </h3>
              <p className="text-base text-primary-700 leading-relaxed mb-6">
                {highlight.description}
              </p>

              {/* Imagem do highlight com lightbox */}
              {highlight.image && (
                <ImageWithLightbox
                  src={highlight.image}
                  alt={highlight.imageAlt || highlight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  containerClassName="relative aspect-video"
                />
              )}
            </Card>
          ))}
        </div>

        {/* Imagem principal com lightbox */}
        {solution.mainImage && (
          <div className="relative">
            <ImageWithLightbox
              src={solution.mainImage}
              alt={solution.mainImageAlt || "Solution"}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              containerClassName="relative aspect-video rounded-2xl shadow-2xl"
              caption={solution.mainImageCaption}
            />
          </div>
        )}
      </Container>
    </Section>
  );
}
