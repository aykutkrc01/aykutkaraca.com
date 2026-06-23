import Link from 'next/link';

const GUIDE_LINKS = [
  {
    href: '/manifesto',
    label: 'Manifestoyu oku',
    description: 'Sitenin ana fikrine geri dön.',
  },
  {
    href: '/yazilar',
    label: 'Yazılara geç',
    description: 'Karar, rol, KPI ve yönetim ritmi notlarını incele.',
  },
  {
    href: '/dogru-yer-mi',
    label: 'Doğru yer mi?',
    description: 'Bu düşünce alanı sana konuşuyor mu hızlıca gör.',
  },
];

export default function NotFound() {
  return (
    <main className="container-page py-[96px] md:py-[132px]">
      <section className="brand-tile tile-mist brand-tile-compact min-h-[auto] gap-[var(--space-3xl)] rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
        <div className="grid gap-[var(--space-3xl)] md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mini-pill w-max">404</p>
            <h1 className="mt-[var(--space-lg)] max-w-[820px] font-sans text-[52px] font-medium leading-[1.02] tracking-[0] text-[var(--color-charcoal)] md:text-[88px]">
              Bu sayfa şirket ritminden düşmüş.
            </h1>
          </div>

          <div className="max-w-[560px] md:justify-self-end">
            <p className="font-sans text-[19px] leading-[1.55] text-[var(--color-warm-gray)] md:text-[22px]">
              Aradığın bağlantı taşınmış, silinmiş veya henüz yazılmamış
              olabilir. En iyi başlangıç noktalarından birine dönebiliriz.
            </p>

            <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
              <Link
                href="/"
                className="inline-flex justify-center rounded-full bg-[var(--color-charcoal)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)]"
              >
                Ana sayfaya dön
              </Link>
              <Link
                href="/yazilar"
                className="inline-flex justify-center rounded-full bg-[rgba(255,255,255,0.72)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)] shadow-[var(--shadow-hairline)]"
              >
                Yazıları aç
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-[var(--space-md)] md:grid-cols-3">
          {GUIDE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface-raised lift-link rounded-[28px] p-[var(--space-xl)]"
            >
              <p className="font-sans text-[18px] font-medium leading-[1.2] text-[var(--color-charcoal)]">
                {item.label}
              </p>
              <p className="mt-[var(--space-sm)] font-sans text-[14px] leading-[1.55] text-[var(--color-warm-gray)]">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
