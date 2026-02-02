/**
 * ============================================
 * COMPONENTE: Footer (Rodapé)
 * ============================================
 *
 * Rodapé com links, informações de contato e copyright.
 */

"use client";

import { useTranslations } from "next-intl";
import { Mail, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: t("nav.work"), href: "/#work" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <footer className="bg-primary-50 border-t border-primary-200 mt-20">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-900">
                {siteConfig.name}
              </h3>
              <p className="text-primary-600 max-w-md">
                {t("site.title")} specializing in enterprise SaaS, design
                systems, and B2B applications.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-2">
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-600 hover:text-accent-500 hover:bg-accent-50 rounded-lg transition-all duration-200"
                    aria-label="Send email"
                  >
                    <Mail size={22} />
                  </a>
                )}
                {siteConfig.links.linkedin && (
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-600 hover:text-accent-500 hover:bg-accent-50 rounded-lg transition-all duration-200"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin size={22} />
                  </a>
                )}
                {siteConfig.links.github && (
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-600 hover:text-accent-500 hover:bg-accent-50 rounded-lg transition-all duration-200"
                    aria-label="Visit GitHub profile"
                  >
                    <Github size={22} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation */}
              <div>
                <h4 className="font-semibold text-primary-900 mb-4">
                  Navigation
                </h4>
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-block py-2 text-primary-600 hover:text-accent-500 transition-colors min-h-[44px] flex items-center"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-primary-900 mb-4">
                  Resources
                </h4>
                <ul className="space-y-1">
                  {siteConfig.links.resume && (
                    <li>
                      <a
                        href={siteConfig.links.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 text-primary-600 hover:text-accent-500 transition-colors min-h-[44px] flex items-center"
                      >
                        {t("nav.resume")}
                      </a>
                    </li>
                  )}
                  {siteConfig.links.linkedin && (
                    <li>
                      <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 text-primary-600 hover:text-accent-500 transition-colors min-h-[44px] flex items-center"
                      >
                        {t("nav.linkedin")}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-200 mt-12 pt-8 text-center md:text-left">
            <p className="text-sm text-primary-500">
              © {currentYear} {siteConfig.name}. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
