"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site-config";
import { homeContent } from "@/content/home-content";
import { fadeInUp } from "@/lib/animations";

export function ContactSection() {
  return (
    <Section id="contact" spacing="xl" background="gray">
      <Container>
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            {homeContent.contact.title}
          </h2>
          <p className="text-lg text-primary-600">
            {homeContent.contact.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href={`mailto:${siteConfig.email}`} size="lg">
              <Mail className="mr-2" size={20} />
              {homeContent.contact.emailButtonText}
            </Button>
            <Button href={siteConfig.links.linkedin} external variant="secondary" size="lg">
              <Linkedin className="mr-2" size={20} />
              {homeContent.contact.linkedinButtonText}
            </Button>
          </div>

          {homeContent.contact.additionalInfo && (
            <p className="text-sm text-primary-500 pt-4">
              {homeContent.contact.additionalInfo}
            </p>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
