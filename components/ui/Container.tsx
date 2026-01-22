/**
 * ============================================
 * COMPONENTE: Container
 * ============================================
 *
 * Wrapper com largura máxima e padding responsivo.
 * Mantém o conteúdo centralizado e com margens consistentes.
 *
 * COMO USAR:
 * <Container>
 *   Conteúdo aqui fica centralizado e com largura máxima
 * </Container>
 *
 * <Container size="lg">Container maior</Container>
 * <Container noPadding>Sem padding lateral</Container>
 */

import { cn } from "@/lib/utils";

// ============================================
// TIPOS
// ============================================

interface ContainerProps {
  /** Conteúdo do container */
  children: React.ReactNode;

  /** Largura máxima do container */
  size?: "sm" | "md" | "lg" | "xl" | "full";

  /** Remove padding lateral (útil para elementos full-width) */
  noPadding?: boolean;

  /** Classes CSS adicionais */
  className?: string;

  /** Tag HTML a ser usada (padrão: div) */
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

// ============================================
// ESTILOS
// ============================================

const sizeStyles = {
  sm: "max-w-4xl", // ~896px
  md: "max-w-6xl", // ~1152px - padrão para conteúdo
  lg: "max-w-7xl", // ~1280px - para seções maiores
  xl: "max-w-8xl", // ~1408px - para hero sections
  full: "max-w-full", // sem limite
};

// ============================================
// COMPONENTE
// ============================================

export function Container({
  children,
  size = "md",
  noPadding = false,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        sizeStyles[size],
        !noPadding && "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * BREAKPOINTS DO PADDING:
 * - Mobile (<640px): 16px (px-4)
 * - Tablet (≥640px): 24px (sm:px-6)
 * - Desktop (≥1024px): 32px (lg:px-8)
 */
