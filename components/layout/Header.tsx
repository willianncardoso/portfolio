/**
 * ============================================
 * COMPONENTE: Header (Cabeçalho/Navegação)
 * ============================================
 *
 * Cabeçalho fixo com navegação e language switcher.
 */

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if a nav item is active (handles locale prefix)
  const isActive = (href: string) => {
    // Remove hash for comparison
    const path = href.split("#")[0] || "/";
    // Check if pathname ends with the path (handles /en/, /pt-BR/ prefixes)
    if (path === "/") {
      return pathname === "/" || pathname === "/en" || pathname === "/pt-BR";
    }
    return pathname.includes(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { label: t("work"), href: "/#work" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-200",
        scrolled && "shadow-md"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-primary-900 hover:text-accent-500 transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-colors duration-200 py-2",
                    active
                      ? "text-accent-600"
                      : "text-primary-700 hover:text-accent-500"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-accent-500 transition-all duration-200",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}

            {/* Separator */}
            <div className="h-6 w-px bg-primary-200" />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* LinkedIn */}
            {siteConfig.links.linkedin && (
              <Button
                href={siteConfig.links.linkedin}
                external
                variant="ghost"
                size="sm"
              >
                {t("linkedin")}
              </Button>
            )}

            {/* Resume */}
            {siteConfig.links.resume && (
              <Button
                href={siteConfig.links.resume}
                external
                variant="secondary"
                size="sm"
              >
                {t("resume")}
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-700 hover:text-accent-500 hover:bg-accent-50 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white border-t border-primary-200 overflow-hidden transition-all duration-300 ease-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container>
          <nav className="py-4 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-3 px-4 font-medium transition-colors duration-200 rounded-lg",
                    active
                      ? "text-accent-600 bg-accent-50"
                      : "text-primary-700 hover:text-accent-500 hover:bg-accent-50"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="border-t border-primary-200 my-4" />

            <div className="space-y-3 px-4">
              {siteConfig.links.linkedin && (
                <Button
                  href={siteConfig.links.linkedin}
                  external
                  variant="ghost"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  {t("linkedin")}
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
                  {t("resume")}
                </Button>
              )}
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
