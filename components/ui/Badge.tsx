/**
 * ============================================
 * COMPONENTE: Badge
 * ============================================
 *
 * Tag pequena para categorias, status, labels.
 * Usado para: categorias de cases, badge "Open to opportunities", tags de skills.
 *
 * COMO USAR:
 * <Badge>Enterprise SaaS</Badge>
 * <Badge variant="success">Open to opportunities</Badge>
 * <Badge variant="secondary">Python</Badge>
 */

import { cn } from "@/lib/utils";

// ============================================
// TIPOS
// ============================================

interface BadgeProps {
  /** Texto do badge */
  children: React.ReactNode;

  /** Variante visual */
  variant?: "default" | "success" | "secondary" | "accent";

  /** Tamanho */
  size?: "sm" | "md";

  /** Classes CSS adicionais */
  className?: string;
}

// ============================================
// ESTILOS
// ============================================

const baseStyles = `
  inline-flex items-center justify-center
  font-medium
  rounded-full
  transition-colors duration-200
`;

const variantStyles = {
  default: "bg-primary-100 text-primary-700 border border-primary-200",
  success: "bg-success-50 text-success-600 border border-success-100",
  secondary: "bg-primary-50 text-primary-600 border border-primary-100",
  accent: "bg-accent-50 text-accent-600 border border-accent-100",
};

const sizeStyles = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

// ============================================
// COMPONENTE
// ============================================

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
