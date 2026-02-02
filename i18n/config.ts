/**
 * i18n Configuration
 * Defines supported locales and default locale
 */

export const locales = ['en', 'pt-BR'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'pt-BR': 'Português',
};

export const localeFlags: Record<Locale, string> = {
  'en': '🇺🇸',
  'pt-BR': '🇧🇷',
};
