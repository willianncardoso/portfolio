/**
 * ============================================
 * COMPONENTE: Footer (Rodapé)
 * ============================================
 *
 * Rodapé do site com links, informações de contato e copyright.
 * Aparece em todas as páginas.
 */

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 border-t border-primary-200 mt-20">
      <Container>
        <div className="py-12 md:py-16">
          {/* Grid de 2 colunas no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* ============================================
                COLUNA ESQUERDA: Informações
                ============================================ */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-900">
                {siteConfig.name}
              </h3>
              <p className="text-primary-600 max-w-md">
                {siteConfig.title} specializing in enterprise SaaS, design
                systems, and B2B applications.
              </p>

              {/* Links sociais */}
              <div className="flex items-center gap-4 pt-2">
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary-600 hover:text-accent-500 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                )}
                {siteConfig.links.linkedin && (
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-accent-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {siteConfig.links.github && (
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-accent-500 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* ============================================
                COLUNA DIREITA: Links rápidos
                ============================================ */}
            <div className="grid grid-cols-2 gap-8">
              {/* Navegação */}
              <div>
                <h4 className="font-semibold text-primary-900 mb-4">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  {siteConfig.navigation.mainMenu.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-primary-600 hover:text-accent-500 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recursos */}
              <div>
                <h4 className="font-semibold text-primary-900 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {siteConfig.links.resume && (
                    <li>
                      <a
                        href={siteConfig.links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-accent-500 transition-colors"
                      >
                        Resume
                      </a>
                    </li>
                  )}
                  {siteConfig.links.linkedin && (
                    <li>
                      <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-accent-500 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* ============================================
              LINHA DE COPYRIGHT (embaixo)
              ============================================ */}
          <div className="border-t border-primary-200 mt-12 pt-8 text-center md:text-left">
            <p className="text-sm text-primary-500">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
