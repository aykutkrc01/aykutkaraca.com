import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { essays, getEssayBySlug } from '@/lib/essays';
import { createPageMetadata } from '@/lib/seo';
import {
  articleJsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from '@/lib/structured-data';

type EssayPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    return {};
  }

  return createPageMetadata({
    title: essay.title,
    description: essay.excerpt,
    path: `/yazilar/${essay.slug}`,
    type: 'article',
    publishedTime: essay.date,
  });
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  return (
    <article className="container-page">
      <JsonLd
        id="essay-webpage-json-ld"
        data={webPageJsonLd({
          title: essay.title,
          description: essay.excerpt,
          path: `/yazilar/${essay.slug}`,
        })}
      />
      <JsonLd id="essay-article-json-ld" data={articleJsonLd(essay)} />
      <JsonLd
        id="essay-breadcrumb-json-ld"
        data={breadcrumbJsonLd([
          { name: 'Ana sayfa', path: '/' },
          { name: 'Yazılar', path: '/yazilar' },
          { name: essay.title, path: `/yazilar/${essay.slug}` },
        ])}
      />
      <header className="py-[var(--space-4xl)] md:py-[112px]">
        <Link
          href="/yazilar"
          className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-lg)] py-[10px] font-sans text-[13px] font-medium text-[var(--color-warm-gray)]"
        >
          Yazılara dön
        </Link>

        <div className={`brand-tile brand-tile-compact ${essay.tone} mt-[var(--space-xl)] rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]`}>
          <div className="max-w-[1060px]">
            <div className="flex flex-wrap items-center gap-[var(--space-md)]">
              <span className="mini-pill">{essay.category}</span>
              <span className="mini-pill">{essay.readingTime}</span>
            </div>
            <h1 className="mt-[var(--space-2xl)] max-w-[1040px] font-sans text-[50px] font-medium leading-[1.02] tracking-[-0.02em] md:text-[92px]">
              {essay.title}
            </h1>
            <p className="mt-[var(--space-2xl)] max-w-[780px] font-sans text-[20px] leading-[1.58] text-[var(--color-warm-gray)] md:text-[24px]">
              {essay.excerpt}
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-[var(--space-4xl)] pb-[var(--space-4xl)] md:grid-cols-[0.8fr_1.2fr]">
        <aside className="md:sticky md:top-[140px] md:self-start">
          <p className="eyebrow">Ana tez</p>
          <p className="mt-[var(--space-lg)] max-w-[420px] font-sans text-[30px] font-medium leading-[1.12] md:text-[44px]">
            {essay.thesis}
          </p>
        </aside>

        <div className="grid gap-[var(--space-3xl)]">
          {essay.sections.map((section, index) => (
            <section
              key={section.title}
              className="border-b border-[var(--color-border)] pb-[var(--space-3xl)]"
            >
              <p className="font-sans text-[13px] font-medium text-[var(--color-light-gray)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-[var(--space-md)] max-w-[760px] font-sans text-[34px] font-medium leading-[1.08] md:text-[52px]">
                {section.title}
              </h2>
              <div className="mt-[var(--space-xl)] grid gap-[var(--space-lg)]">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-[760px] font-sans text-[18px] leading-[1.75] text-[var(--color-warm-gray)] md:text-[20px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="pb-[var(--space-4xl)]">
        <div className="surface-muted rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">Sıradaki adım</p>
          <h2 className="mt-[var(--space-lg)] max-w-[780px] font-sans text-[42px] font-medium leading-[1.04] md:text-[68px]">
            Yazıyı okudun. Şimdi sistemi birlikte netleştir.
          </h2>
          <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
            <Link
              href="/manifesto"
              className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
            >
              Manifestoyu oku
            </Link>
            <Link
              href="/dogru-yer-mi"
              className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
            >
              Doğru yer mi?
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
