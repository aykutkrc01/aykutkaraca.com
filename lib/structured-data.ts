import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const organizationId = `${SITE_URL}/#organization`;

export function absoluteUrl(path = '') {
  if (path.startsWith('http')) {
    return path;
  }

  return `${SITE_URL}${path}`;
}

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: 'tr-TR',
        description: SITE_TAGLINE,
        publisher: {
          '@id': personId,
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_NAME,
        url: SITE_URL,
        image: absoluteUrl('/images/portraits/aykut-karaca-portrait-01.jpg'),
        jobTitle: 'Stratejik Operatör',
        description:
          'Türk KOBİ ve aile şirketleri için karar, rol, KPI, süreç, dashboard ve yönetim ritmi kuran stratejik operatör.',
        knowsAbout: [
          'KOBİ yönetim sistemleri',
          'Aile şirketleri',
          'KPI',
          'Dashboard',
          'Süreç yönetimi',
          'Yönetim ritmi',
          'Yapay zeka destekli iş sistemleri',
        ],
        worksFor: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Aykut Karaca Stratejik Düşünce Merkezi',
        url: SITE_URL,
        founder: {
          '@id': personId,
        },
      },
    ],
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `${title} · ${SITE_NAME}`,
    description,
    inLanguage: 'tr-TR',
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': personId,
    },
  };
}
