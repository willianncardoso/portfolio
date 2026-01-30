/**
 * ============================================
 * COMPONENTE: Header (Cabeçalho/Navegação)
 * ============================================
 *
 * Cabeçalho fixo do site com logo, navegação e links de contato.
 * Aparece em todas as páginas.
 *
 * RECURSOS:
 * - Logo/nome clicável (volta para home)
 * - Menu de navegação (Work, About, Contact)
 * - Links para LinkedIn e Resume
 * - Responsivo (hamburguer menu no mobile)
 * - Efeito de scroll (sombra ao scrollar)
 */

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para adicionar sombra no header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu mobile ao clicar em um link
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-200",
        scrolled && "shadow-md"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ============================================
              LOGO / NOME (Lado esquerdo)
              ============================================ */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-primary-900 hover:text-accent-500 transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* ============================================
              NAVEGAÇÃO DESKTOP (Centro/Direita)
              ============================================ */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Links do menu */}
            {siteConfig.navigation.mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-primary-700 hover:text-accent-500 font-medium transition-all duration-300 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Separador vertical */}
            <div className="h-6 w-px bg-primary-200" />

            {/* Botão LinkedIn */}
            {siteConfig.links.linkedin && (
              <Button
                href={siteConfig.links.linkedin}
                external
                variant="ghost"
                size="sm"
              >
                LinkedIn
              </Button>
            )}

            {/* Botão Resume */}
            {siteConfig.links.resume && (
              <Button
                href={siteConfig.links.resume}
                external
                variant="secondary"
                size="sm"
              >
                Resume
              </Button>
            )}
          </nav>

          {/* ============================================
              MENU HAMBURGUER (Mobile)
              ============================================ */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-700 hover:text-accent-500 hover:bg-accent-50 rounded-lg transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* ============================================
          MENU MOBILE (Overlay)
          ============================================ */}
      <div
        className={cn(
          "md:hidden bg-white border-t border-primary-200 overflow-hidden transition-all duration-300 ease-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container>
          <nav className="py-4 space-y-2">
            {/* Links do menu */}
            {siteConfig.navigation.mainMenu.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block py-3 px-4 text-primary-700 hover:text-accent-500 hover:bg-accent-50 font-medium transition-all duration-200 rounded-lg"
                style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
              >
                {item.label}
              </Link>
            ))}

            {/* Separador */}
            <div className="border-t border-primary-200 my-4" />

            {/* Botões */}
            <div className="space-y-3 px-4">
              {siteConfig.links.linkedin && (
                <Button
                  href={siteConfig.links.linkedin}
                  external
                  variant="ghost"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  LinkedIn
                </Button>
              )}
              {siteConfig.links.resume && (
                <Button
                  href={siteConfig.links.resume}
                  external
                  variant="secondary"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  Resume
                </Button>
              )}
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

/**
 * OBSERVAÇÕES:
 * - "use client" no topo porque usa useState e useEffect (client-side)
 * - backdrop-blur-md cria efeito de vidro fosco no header
 * - z-50 garante que o header fica acima de todo o conteúdo
 * - fixed top-0 mantém o header sempre visível ao scrollar
 */
