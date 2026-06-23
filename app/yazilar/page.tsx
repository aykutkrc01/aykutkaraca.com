import type { Metadata } from 'next';
import Link from 'next/link';
import { essays } from '@/lib/essays';

export const metadata: Metadata = {
  title: 'Yazılar',
  description:
    'KOBİ, aile şirketi, dashboard ve yönetim sistemi üzerine Aykut Karaca yazıları.',
};

export default function YazilarPage() {
  return (
    <div className="container-page">
      <header className="py-[var(--space-4xl)] md:py-[112px]">
        <div className="max-w-[1040px]">
          <p className="eyebrow">Yazılar</p>
          <h1 className="mt-[var(--space-lg)] font-sans text-[58px] font-medium leading-[1.02] tracking-[-0.02em] md:text-[112px]">
            Daha az gürültü. Daha net yönetim düşüncesi.
          </h1>
          <p className="mt-[var(--space-2xl)] max-w-[760px] font-sans text-[20px] leading-[1.6] text-[var(--color-warm-gray)] md:text-[24px]">
            KOBİ ve aile şirketlerinde karar, rol, KPI, süreç, dashboard ve
            yönetim ritmi üzerine notlar. Vaka değil, tekrar eden örüntü.
          </p>
        </div>
      </header>

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
