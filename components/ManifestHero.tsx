import Link from 'next/link';

export default function ManifestHero() {
  return (
    <section className="flex min-h-[68vh] flex-col justify-end py-[var(--rhythm-md)] md:min-h-[78vh]">
      <p className="eyebrow">Cilt I · 2026</p>
      <h1 className="mt-[var(--space-2xl)] max-w-[18ch] text-hero">
        Daha fazla yazılım değil.<br />
        Daha iyi yönetilen şirketler.
      </h1>
      <p className="mt-[var(--space-2xl)] max-w-[58ch] text-deck text-[var(--color-warm-gray)]">
        Aykut Karaca; Türk KOBİ ve aile şirketleri için karar, rol, KPI,
        süreç ve yönetim ritmi kuran stratejik operatördür. Yazılım araç,
        yönetim sistemi amaçtır.
      </p>
      <div className="mt-[var(--space-3xl)] flex items-center gap-[var(--space-2xl)]">
        <Link
          href="/manifesto"
          className="lift-link inline-flex items-center border-b border-[var(--color-ink)] pb-[2px] font-sans text-[14px] font-medium text-[var(--color-charcoal)]"
        >
          Manifestoyu oku
        </Link>
        <Link
          href="/yontem"
          className="lift-link inline-flex items-center border-b border-transparent pb-[2px] font-sans text-[14px] text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
        >
          Yöntem
        </Link>
      </div>
    </section>
  );
}
