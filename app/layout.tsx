import type { Metadata } from 'next';
import { Source_Serif_4, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = 'https://aykutkaraca.com';
const SITE_NAME = 'Aykut Karaca';
const SITE_TAGLINE = 'Daha fazla yazılım değil, daha iyi yönetilen şirketler.';

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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Stratejik Düşünce Merkezi`,
    description: SITE_TAGLINE,
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      'application/rss+xml': `${SITE_URL}/rss.xml`,
    },
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
    <html lang="tr" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
