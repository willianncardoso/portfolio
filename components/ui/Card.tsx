/**
 * ============================================
 * COMPONENTE: Card
 * ============================================
 *
 * Container com fundo, borda e sombra para agrupar conteúdo relacionado.
 * Usado para cases, diferenciais, informações agrupadas, etc.
 *
 * COMO USAR:
 * <Card>
 *   <h3>Título</h3>
 *   <p>Conteúdo do card</p>
 * </Card>
 *
 * <Card hover>Card com efeito hover (levanta ao passar mouse)</Card>
 * <Card padding="lg">Card com mais espaço interno</Card>
 * <Card clickable href="/case">Card clicável (vira link)</Card>
 */

import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================
// TIPOS
// ============================================

interface CardProps {
  /** Conteúdo do card */
  children: React.ReactNode;

  /** Adiciona efeito de hover (levanta e sombra mais forte) */
  hover?: boolean;

  /** Tamanho do padding interno */
  padding?: "sm" | "md" | "lg" | "none";

  /** Classes CSS adicionais */
  className?: string;

  /** Se definido, torna o card um link clicável */
  href?: string;

  /** ID do elemento */
  id?: string;

  /** Função chamada ao clicar (se não tiver href) */
  onClick?: () => void;
}

// ============================================
// ESTILOS
// ============================================

const baseStyles = `
  bg-white
  border border-primary-200
  rounded-xl
  transition-all duration-200
`;

const paddingStyles = {
  none: "",
  sm: "p-4", // 16px
  md: "p-6", // 24px
  lg: "p-8", // 32px
};

const hoverStyles = `
  hover:-translate-y-1
  hover:shadow-lg
  hover:border-primary-300
`;

// ============================================
// COMPONENTE
// ============================================

export function Card({
  children,
  hover = false,
  padding = "md",
  className = "",
  href,
  id,
  onClick,
}: CardProps) {
  const combinedClassName = cn(
    baseStyles,
    paddingStyles[padding],
    hover && hoverStyles,
    (href || onClick) && "cursor-pointer",
    className
  );

  // Se tem href, renderiza como link
  if (href) {
    return (
      <Link href={href} className={combinedClassName} id={id}>
        {children}
      </Link>
    );
  }

  // Se tem onClick, renderiza como button
  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClassName} id={id}>
        {children}
      </button>
    );
  }

  // Caso contrário, renderiza como div
  return (
    <div className={combinedClassName} id={id}>
      {children}
    </div>
  );
}
