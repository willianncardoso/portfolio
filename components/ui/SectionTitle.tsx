/**
 * ============================================
 * COMPONENTE: SectionTitle
 * ============================================
 *
 * Título padronizado para seções do site.
 * Mantém consistência visual em todos os títulos.
 *
 * COMO USAR:
 * <SectionTitle>Featured Work</SectionTitle>
 * <SectionTitle badge="About" subtitle="Um pouco sobre mim">
 *   My Journey
 * </SectionTitle>
 */

import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

// ============================================
// TIPOS
// ============================================

interface SectionTitleProps {
  /** Texto do título */
  children: React.ReactNode;

  /** Badge/tag acima do título (opcional) */
  badge?: string;

  /** Subtítulo abaixo do título (opcional) */
  subtitle?: string;

  /** Alinhamento do texto */
  align?: "left" | "center";

  /** Classes CSS adicionais */
  className?: string;

  /** Tag HTML do título (padrão: h2) */
  as?: "h1" | "h2" | "h3";
}

// ============================================
// COMPONENTE
// ============================================

export function SectionTitle({
  children,
  badge,
  subtitle,
  align = "left",
  className = "",
  as: Component = "h2",
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("space-y-4", alignmentClass, className)}>
      {/* Badge opcional acima do título */}
      {badge && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Badge variant="secondary">{badge}</Badge>
        </div>
      )}

      {/* Título principal */}
      <Component className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 tracking-tight">
        {children}
      </Component>

      {/* Subtítulo opcional abaixo do título */}
      {subtitle && (
        <p className="text-lg md:text-xl text-primary-600 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
