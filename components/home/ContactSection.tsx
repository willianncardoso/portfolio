/**
 * COMPONENTE: ContactSection
 * Seção de contato com CTAs
 */

"use client";

import { Mail, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site-config";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <Section id="contact" spacing="lg" background="gray">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-xl text-primary-600 leading-relaxed">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <Mail className="w-5 h-5" />
              {t("emailButton")}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0A66C2] text-white rounded-2xl font-bold text-lg hover:bg-[#004182] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              {t("linkedinButton")}
            </a>
          </div>

          <p className="text-sm text-primary-500 pt-4">{t("additionalInfo")}</p>
        </div>
      </Container>
    </Section>
  );
}
