/**
 * COMPONENTE: ContactSection
 * Seção de contato com CTAs
 */

"use client";

import { Mail, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site-config";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <Section id="contact" spacing="xl" background="gray">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            {t("title")}
          </h2>
          <p className="text-lg text-primary-600">{t("description")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href={`mailto:${siteConfig.email}`} size="lg">
              <Mail className="mr-2" size={20} aria-hidden="true" />
              {t("emailButton")}
            </Button>
            <Button
              href={siteConfig.links.linkedin}
              external
              variant="secondary"
              size="lg"
            >
              <Linkedin className="mr-2" size={20} aria-hidden="true" />
              {t("linkedinButton")}
            </Button>
          </div>

          <p className="text-sm text-primary-500 pt-4">{t("additionalInfo")}</p>
        </div>
      </Container>
    </Section>
  );
}
