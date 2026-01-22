/**
 * ============================================
 * PÁGINA HOME
 * ============================================
 *
 * Página principal do portfólio (rota: /)
 * Composta por várias seções que mostram o trabalho e a experiência.
 *
 * ESTRUTURA:
 * 1. HeroSection - Headline principal e CTAs
 * 2. DifferentiatorsSection - Cards "What I Bring"
 * 3. CasesGridSection - Grid de cases em destaque
 * 4. ContactSection - CTA de contato
 */

import { HeroSection } from "@/components/home/HeroSection";
import { DifferentiatorsSection } from "@/components/home/DifferentiatorsSection";
import { CasesGridSection } from "@/components/home/CasesGridSection";
import { ContactSection } from "@/components/home/ContactSection";

// ============================================
// COMPONENTE DA PÁGINA
// ============================================

export default function HomePage() {
  return (
    <>
      {/* Seção hero com headline principal */}
      <HeroSection />

      {/* Seção de diferenciais profissionais */}
      <DifferentiatorsSection />

      {/* Grid de cases em destaque */}
      <CasesGridSection />

      {/* CTA de contato */}
      <ContactSection />
    </>
  );
}

/**
 * OBSERVAÇÕES:
 * - Este é um Server Component (não tem "use client")
 * - Os componentes individuais (Hero, etc) podem ser Client Components
 * - A navegação entre seções funciona com as âncoras (#work, #contact)
 *
 * COMO ADICIONAR UMA NOVA SEÇÃO:
 * 1. Crie o componente em /components/home/NovaSecao.tsx
 * 2. Importe: import { NovaSecao } from "@/components/home/NovaSecao"
 * 3. Adicione no JSX: <NovaSecao />
 * 4. A ordem no código define a ordem na página
 */
