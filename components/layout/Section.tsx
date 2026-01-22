/**
 * ============================================
 * COMPONENTE: Section
 * ============================================
 *
 * Wrapper para seções da página com espaçamento consistente.
 * Facilita manter espaçamento vertical uniforme entre seções.
 *
 * COMO USAR:
 * <Section>
 *   <Container>
 *     Conteúdo da seção aqui
 *   </Container>
 * </Section>
 *
 * <Section spacing="lg" background="gray">
 *   Seção com mais espaço e fundo cinza
 * </Section>
 */

import { cn } from "@/lib/utils";

// ============================================
// TIPOS
// ============================================

interface SectionProps {
  /** Conteúdo da seção */
  children: React.ReactNode;

  /** Espaçamento vertical (padding top/bottom) */
  spacing?: "sm" | "md" | "lg" | "xl" | "none";

  /** Cor de fundo */
  background?: "white" | "gray" | "none";

  /** Classes CSS adicionais */
  className?: string;

  /** ID da seção (útil para âncoras de navegação) */
  id?: string;

  /** Tag HTML (padrão: section) */
  as?: "section" | "div" | "article" | "main";
}

// ============================================
// ESTILOS
// ============================================

const spacingStyles = {
  none: "",
  sm: "py-12", // 48px
  md: "py-16 md:py-20", // 64px mobile, 80px desktop
  lg: "py-20 md:py-28", // 80px mobile, 112px desktop
  xl: "py-24 md:py-32", // 96px mobile, 128px desktop
};

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-primary-50",
  none: "",
};

// ============================================
// COMPONENTE
// ============================================

export function Section({
  children,
  spacing = "md",
  background = "none",
  className = "",
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        spacingStyles[spacing],
        backgroundStyles[background],
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * EXEMPLO DE USO TÍPICO:
 *
 * <Section id="work" spacing="lg">
 *   <Container>
 *     <SectionTitle>Featured Work</SectionTitle>
 *     ... conteúdo ...
 *   </Container>
 * </Section>
 */
