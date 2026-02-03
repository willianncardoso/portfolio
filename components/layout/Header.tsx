/**
 * ============================================
 * COMPONENTE: Header (Cabeçalho/Navegação)
 * ============================================
 *
 * Cabeçalho fixo com navegação e LinkedIn CTA.
 */

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/content/site-config";
import { getImagePath } from "@/lib/image-path";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if a nav item is active (handles locale prefix)
  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";
    if (path === "/") {
      return pathname === "/" || pathname === "/en" || pathname === "/pt-BR";
    }
    return pathname.includes(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
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
          {/* Logo with avatar and accent bar */}
          <Link href="/" className="flex items-center gap-3 group">
            {scrolled && (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-200 flex-shrink-0">
                <Image
                  src={getImagePath("/images/willian-photo.jpg")}
                  alt={siteConfig.name}
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            {!scrolled && (
              <div className="w-1 h-8 bg-gradient-to-b from-accent-500 to-primary-600 rounded-full" />
            )}
            <div>
              <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-accent-600 transition-colors duration-200">
                {siteConfig.name}
              </span>
              <span className="hidden sm:block text-xs text-gray-500 font-medium -mt-0.5">
                {siteConfig.title}
              </span>
            </div>
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
                      active ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              );
            })}

            {/* Separator */}
            <div className="h-6 w-px bg-primary-200" />

            {/* LinkedIn CTA */}
            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("linkedin")} (opens in new tab)`}
                className="inline-flex items-center px-5 py-2 bg-[#0A66C2] text-white text-sm font-semibold rounded-lg hover:bg-[#004182] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {t("linkedin")}
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
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

            <div className="px-4">
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  aria-label={`${t("linkedin")} (opens in new tab)`}
                  className="block w-full text-center px-5 py-3 bg-[#0A66C2] text-white font-semibold rounded-lg hover:bg-[#004182] transition-all duration-200"
                >
                  {t("linkedin")}
                </a>
              )}
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
