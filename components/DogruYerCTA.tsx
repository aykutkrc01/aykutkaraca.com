import Link from 'next/link';

export default function DogruYerCTA() {
  return (
    <section className="rhythm-md border-t border-[var(--color-border)]">
      <div className="grid gap-[var(--space-3xl)] md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow">İletişim</p>
          <h2 className="mt-[var(--space-lg)] max-w-[18ch] text-display text-[var(--color-charcoal)]">
            Konuşmaya hazır olduğunda buradayım.
          </h2>
        </div>
        <div className="flex items-center gap-[var(--space-2xl)]">
          <Link
            href="/dogru-yer-mi"
            className="lift-link inline-flex items-center border-b border-[var(--color-ink)] pb-[2px] font-sans text-[14px] font-medium text-[var(--color-charcoal)]"
          >
            Uyum
          </Link>
          <a
            href="https://tomorrowdigital.co"
            target="_blank"
            rel="noopener noreferrer"
            className="lift-link inline-flex items-center border-b border-transparent pb-[2px] font-sans text-[14px] text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
          >
            Tomorrow Digital
          </a>
        </div>
      </div>
    </section>
  );
}
