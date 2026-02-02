/**
 * i18n Routing Configuration
 * Defines how locales are handled in URLs
 */

import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always', // Always show locale in URL (required for static export)
});

// Navigation helpers with locale awareness
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
