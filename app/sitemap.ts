import type { MetadataRoute } from 'next';
import { essays } from '@/lib/essays';
import { SITE_URL, STATIC_ROUTES } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const essayRoutes = essays.map((essay) => ({
    url: `${SITE_URL}/yazilar/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...essayRoutes];
}
