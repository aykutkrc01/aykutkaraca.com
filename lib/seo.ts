import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
}: SeoConfig): Metadata {
  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: path,
      title: `${title} · ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · ${SITE_NAME}`,
      description,
    },
  };

  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      authors: [SITE_NAME],
    };
  }

  return metadata;
}
