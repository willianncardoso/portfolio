/**
 * ============================================
 * ROOT LAYOUT
 * ============================================
 *
 * Minimal root layout. The actual HTML structure is in [locale]/layout.tsx
 * to properly set the lang attribute for each locale.
 */

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
