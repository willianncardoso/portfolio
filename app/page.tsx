/**
 * ============================================
 * ROOT PAGE REDIRECT
 * ============================================
 *
 * Redirects users from / to /en (default locale).
 * For static export, we use client-side redirect.
 */

import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
