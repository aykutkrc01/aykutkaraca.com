import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { essays } from '@/lib/essays';
import { createPageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createPageMetadata({
  title: 'Yazılar',
  description:
    'KOBİ yönetim sistemi, dijital dönüşüm, aile şirketi, operasyon ve liderlik üzerine Aykut Karaca yazıları.',
  path: '/yazilar',
});

const TOPICS = [
  'Yönetim sistemi',
  'Dijital dönüşüm',
  'Aile şirketi',
  'Operasyon',
  'Liderlik',
  'Dashboard',
];

export default function YazilarPage() {
  return (
    <div className="container-page">
      <JsonLd
        id="yazilar-webpage-json-ld"
        data={webPageJsonLd({
          title: 'Yazılar',
          description:
            'KOBİ yönetim sistemi, dijital dönüşüm, aile şirketi, operasyon ve liderlik üzerine Aykut Karaca yazıları.',
          path: '/yazilar',
        })}
      />
      <JsonLd
        id="yazilar-breadcrumb-json-ld"
        data={breadcrumbJsonLd([
          { name: 'Ana sayfa', path: '/' },
          { name: 'Yazılar', path: '/yazilar' },
        ])}
      />
      <header className="py-[var(--space-4xl)] md:py-[112px]">
        <div className="max-w-[1040px]">
          <p className="eyebrow">Yazılar</p>
          <h1 className="mt-[var(--space-lg)] font-sans text-[58px] font-medium leading-[1.02] tracking-[0] md:text-[112px]">
            Daha az gürültü. Daha net yönetim düşüncesi.
          </h1>
          <p className="mt-[var(--space-2xl)] max-w-[760px] font-sans text-[20px] leading-[1.6] text-[var(--color-warm-gray)] md:text-[24px]">
            KOBİ ve aile şirketlerinde karar, rol, KPI, süreç, dashboard,
            dijital dönüşüm ve yönetim ritmi üzerine notlar. Vaka değil,
            tekrar eden yönetim deseni.
          </p>
        </div>
      </header>

      <section className="surface-muted mb-[var(--space-3xl)] rounded-[36px] p-[var(--space-xl)] md:p-[var(--space-2xl)]">
        <div className="grid gap-[var(--space-xl)] md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="eyebrow">SEO içerik planı</p>
            <h2 className="mt-[var(--space-lg)] max-w-[560px] font-sans text-[34px] font-medium leading-[1.08] md:text-[52px]">
              İlk seri temel kavramları sahiplenir.
            </h2>
          </div>
          <div>
            <p className="max-w-[640px] font-sans text-[17px] leading-[1.62] text-[var(--color-warm-gray)]">
              Bu arşiv, “yazılım alalım mı?” sorusundan önce şirketin nasıl
              yönetildiğini konuşan bir kaynak olarak büyür. Her başlık Google’a
              da aynı sinyali verir: burası yönetim sistemi ve dijital dönüşüm
              üzerine uzmanlık alanıdır.
            </p>
            <div className="mt-[var(--space-lg)] flex flex-wrap gap-[var(--space-sm)]">
              {TOPICS.map((topic) => (
                <span key={topic} className="tile-cta">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-[var(--space-xl)] pb-[var(--space-4xl)] md:grid-cols-3">
        {essays.map((essay, index) => (
          <Link
            key={essay.slug}
            href={`/yazilar/${essay.slug}`}
            className={`brand-tile ${essay.tone} lift-link min-h-[460px]`}
          >
            <div>
              <div className="flex items-center justify-between gap-[var(--space-md)]">
                <span className="mini-pill">{essay.category}</span>
                <span className="font-sans text-[13px] font-medium text-[var(--color-warm-gray)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h2 className="mt-[var(--space-2xl)] font-sans text-[36px] font-medium leading-[1.04] md:text-[48px]">
                {essay.title}
              </h2>
              <p className="mt-[var(--space-lg)] font-sans text-[17px] leading-[1.55] text-[var(--color-warm-gray)]">
                {essay.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between gap-[var(--space-md)]">
              <span className="tile-cta">{essay.readingTime}</span>
              <span className="font-sans text-[15px] font-medium">Oku</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
