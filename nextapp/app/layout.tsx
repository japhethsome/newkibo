import type { Metadata } from 'next';
import './globals.css';

/* ─── Fonts ─────────────────────────────── */
// We removed next/font/google to prevent build-time fetch errors.
// Fonts are now loaded via standard <link> tags in the HTML head.

/* ─── Metadata ───────────────────────────── */
export const metadata: Metadata = {
  title: 'Kibochi Star Coffee Limited — Specialty Coffee from the Highlands',
  description:
    'Kibochi Star Coffee Limited is a specialty coffee processor and exporter operating a fully-equipped wet mill in Koru, serving farmer networks across Kericho, Kisumu, and Nandi counties.',
  keywords: [
    'Kibochi Star Coffee',
    'Kenya coffee',
    'specialty coffee',
    'wet mill',
    'Koru',
    'Kericho',
    'Kisumu',
    'Nandi',
    'clean coffee',
    'buni coffee',
    'export',
  ],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

/* ─── Root Layout ────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
