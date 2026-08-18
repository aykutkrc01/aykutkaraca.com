import Link from 'next/link';

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
              Aradığın bağlantı taşınmış ya da kaldırılmış olabilir. Ana
              sayfadan devam edebilir veya doğrudan iletişime geçebilirsin.
            </p>

            <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
              <Link
                href="/"
                className="inline-flex justify-center rounded-full bg-[var(--color-charcoal)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)]"
              >
                Ana sayfaya dön
              </Link>
              <a
                href="https://wa.me/905419383012?text=Merhaba%20Aykut%20Bey%2C%20web%20siteniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[rgba(255,255,255,0.72)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)] shadow-[var(--shadow-hairline)]"
              >
                WhatsApp&apos;tan yaz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
