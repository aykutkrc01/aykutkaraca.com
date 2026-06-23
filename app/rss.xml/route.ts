import { essays } from '@/lib/essays';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const items = essays
    .map((essay) => {
      const url = `${SITE_URL}/yazilar/${essay.slug}`;

      return `
        <item>
          <title>${escapeXml(essay.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(essay.excerpt)}</description>
          <category>${escapeXml(essay.category)}</category>
          <pubDate>${new Date(essay.date).toUTCString()}</pubDate>
        </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(SITE_NAME)}</title>
        <link>${SITE_URL}</link>
        <description>${escapeXml(SITE_TAGLINE)}</description>
        <language>tr-TR</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
