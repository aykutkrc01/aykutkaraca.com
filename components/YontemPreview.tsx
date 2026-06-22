import Link from 'next/link';

const STEPS = ['Teşhis', 'KPI', 'Süreç', 'Rol', 'Dashboard', 'Yönetim ritmi'];

export default function YontemPreview() {
  return (
    <section className="grid gap-[var(--space-4xl)] py-[120px] md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="eyebrow">Yöntem</p>
        <h2 className="mt-[var(--space-lg)] text-section">Rapor değil. Çalışan sistem.</h2>
        <p className="mt-[var(--space-xl)] max-w-[420px] font-sans text-[18px] leading-[1.55] text-[var(--color-warm-gray)]">
          Her adım bir çıktı üretir. Yönetim dili, şirketin günlük karar ritmine bağlanır.
        </p>
        <Link
          href="/yontem"
          className="mt-[var(--space-xl)] inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-lg)] py-[12px] font-sans text-[14px] font-medium text-[var(--color-charcoal)] shadow-[0_14px_30px_rgba(0,0,0,0.055)]"
        >
          Yöntemi gör
        </Link>
      </div>
      <ol className="surface-raised grid gap-0 rounded-[36px] p-[var(--space-md)] md:p-[var(--space-lg)]">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className="flex items-center gap-[var(--space-xl)] rounded-[24px] px-[var(--space-lg)] py-[var(--space-lg)] transition-colors duration-200 hover:bg-[var(--color-surface)]"
          >
            <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--color-charcoal)] font-sans text-[11px] font-medium text-[var(--color-cream)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-sans text-[28px] font-medium leading-none md:text-[36px]">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
