import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CaseStudy } from "@/types";
import { getImagePath } from "@/lib/image-path";

interface CaseHeroProps {
  caseStudy: CaseStudy;
}

export function CaseHero({ caseStudy }: CaseHeroProps) {
  const { title, category, subtitle, images } = caseStudy;

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Conteúdo */}
      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge da categoria */}
          <div className="mb-6">
            <Badge className="border-white/30 text-white bg-white/10">
              {category}
            </Badge>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </Container>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
