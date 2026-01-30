/**
 * ============================================
 * COMPONENTE: Button (Botão)
 * ============================================
 *
 * Botão reutilizável com diferentes variantes visuais.
 * Usado em todo o site para ações e navegação.
 *
 * COMO USAR:
 * <Button>Texto do botão</Button>
 * <Button variant="secondary">Botão secundário</Button>
 * <Button variant="ghost">Botão fantasma</Button>
 * <Button href="/about">Link como botão</Button>
 * <Button href="https://google.com" external>Link externo</Button>
 *
 * VARIANTES:
 * - primary (padrão): Fundo azul, texto branco - para ações principais
 * - secondary: Borda, fundo transparente - para ações secundárias
 * - ghost: Sem borda, só texto - para links menos importantes
 *
 * TAMANHOS:
 * - sm: Pequeno (32px altura)
 * - md: Médio/padrão (40px altura)
 * - lg: Grande (48px altura)
 */

import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================
// TIPOS (define as propriedades do componente)
// ============================================

interface ButtonProps {
  /** Conteúdo do botão (texto, ícones, etc) */
  children: React.ReactNode;

  /** Estilo visual do botão */
  variant?: "primary" | "secondary" | "ghost";

  /** Tamanho do botão */
  size?: "sm" | "md" | "lg";

  /** Se definido, renderiza como link em vez de button */
  href?: string;

  /** Abre link em nova aba (só funciona se href estiver definido) */
  external?: boolean;

  /** Classes CSS adicionais do Tailwind */
  className?: string;

  /** Função chamada ao clicar (só funciona se não tiver href) */
  onClick?: () => void;

  /** Desabilita o botão */
  disabled?: boolean;

  /** Largura total (ocupa 100% do container) */
  fullWidth?: boolean;

  /** ID do elemento (útil para testes e âncoras) */
  id?: string;
}

// ============================================
// ESTILOS (classes Tailwind para cada variante)
// ============================================

/** Classes base aplicadas em todos os botões */
const baseStyles = `
  inline-flex items-center justify-center
  rounded-xl
  font-semibold
  transition-all duration-300 ease-out
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500
  disabled:opacity-50 disabled:cursor-not-allowed
  active:scale-[0.98]
`;

/** Estilos específicos para cada variante */
const variantStyles = {
  primary: `
    bg-accent-500 text-white
    hover:bg-accent-600 hover:-translate-y-0.5
    active:bg-accent-700
    shadow-md hover:shadow-lg
  `,
  secondary: `
    bg-white text-primary-800
    border-2 border-primary-200
    hover:border-accent-500 hover:text-accent-600 hover:bg-accent-50/50
    hover:-translate-y-0.5
    shadow-sm hover:shadow-md
  `,
  ghost: `
    bg-transparent text-accent-500
    hover:text-accent-600 hover:bg-accent-50
  `,
};

/** Estilos específicos para cada tamanho */
const sizeStyles = {
  sm: "px-4 py-2.5 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  onClick,
  disabled = false,
  fullWidth = false,
  id,
}: ButtonProps) {
  // Combina todas as classes CSS
  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className
  );

  // ============================================
  // SE TEM HREF → RENDERIZA COMO LINK
  // ============================================

  if (href) {
    // Link externo (abre em nova aba)
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer" // Segurança: previne acesso ao window.opener
          className={combinedClassName}
          id={id}
        >
          {children}
        </a>
      );
    }

    // Link interno (navegação no site via Next.js)
    return (
      <Link href={href} className={combinedClassName} id={id}>
        {children}
      </Link>
    );
  }

  // ============================================
  // CASO CONTRÁRIO → RENDERIZA COMO BUTTON
  // ============================================

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      id={id}
      type="button" // Previne submit acidental em forms
    >
      {children}
    </button>
  );
}

/**
 * ============================================
 * EXEMPLO DE USO
 * ============================================
 *
 * // Botão primário básico
 * <Button>Click me</Button>
 *
 * // Botão secundário pequeno
 * <Button variant="secondary" size="sm">Cancel</Button>
 *
 * // Link interno como botão
 * <Button href="/about">About me</Button>
 *
 * // Link externo como botão
 * <Button href="https://linkedin.com/in/willian" external>
 *   LinkedIn
 * </Button>
 *
 * // Botão com ação onClick
 * <Button onClick={() => console.log("Clicked!")}>
 *   Click me
 * </Button>
 *
 * // Botão desabilitado
 * <Button disabled>Not available</Button>
 *
 * // Botão com largura total
 * <Button fullWidth>Submit</Button>
 */
