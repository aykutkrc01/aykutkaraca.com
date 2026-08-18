import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';
import { siteJsonLd } from '@/lib/structured-data';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Stratejik Düşünce Merkezi`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Stratejik Düşünce Merkezi`,
    description: SITE_TAGLINE,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Stratejik Düşünce Merkezi`,
    description: SITE_TAGLINE,
    images: ['/twitter-image'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <JsonLd id="site-json-ld" data={siteJsonLd()} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
