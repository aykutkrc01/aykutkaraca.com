import Link from 'next/link';

const STEPS = ['Teşhis', 'KPI', 'Süreç', 'Rol', 'Dashboard', 'Yönetim ritmi'];

export default function YontemPreview() {
  return (
    <section className="rhythm-md grid gap-[var(--space-4xl)] border-t border-[var(--color-border)] md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="eyebrow">Yöntem</p>
        <h2 className="mt-[var(--space-lg)] text-section">
          Rapor değil. Çalışan sistem.
        </h2>
        <p className="mt-[var(--space-xl)] max-w-[44ch] text-deck text-[var(--color-warm-gray)]">
          Her adım bir çıktı üretir. Yönetim dili, şirketin günlük karar
          ritmine bağlanır.
        </p>
        <Link
          href="/yontem"
          className="lift-link mt-[var(--space-2xl)] inline-flex items-center border-b border-[var(--color-ink)] pb-[2px] font-sans text-[14px] font-medium text-[var(--color-charcoal)]"
        >
          Yöntemi gör
        </Link>
      </div>
      <ol className="grid gap-0 self-start">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className="flex items-baseline gap-[var(--space-xl)] border-t border-[var(--color-border)] py-[var(--space-xl)] last:border-b"
          >
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-warm-gray)] tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-serif text-[28px] font-light leading-[1.05] text-[var(--color-charcoal)] md:text-[34px]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
