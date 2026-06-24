import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Stratejik Düşünce Merkezi`,
    short_name: SITE_NAME,
    description: SITE_TAGLINE,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0B0B0B',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: `${SITE_URL}/icon`,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: `${SITE_URL}/apple-icon`,
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
