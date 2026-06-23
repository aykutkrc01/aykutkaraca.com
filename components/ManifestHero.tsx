import Image from 'next/image';
import Link from 'next/link';

export default function ManifestHero() {
  return (
    <section className="relative grid items-center gap-[var(--space-4xl)] py-[var(--space-4xl)] md:min-h-[720px] md:grid-cols-[1.34fr_0.66fr] md:py-[80px]">
      <div className="pointer-events-none absolute left-[-12%] top-[14%] h-[360px] w-[360px] rounded-full bg-[var(--color-surface)] opacity-80 blur-3xl" />
      <div className="relative">
        <p className="eyebrow">Stratejik Düşünce Merkezi</p>
        <h1 className="mt-[var(--space-lg)] max-w-[920px] text-hero">
          Daha fazla yazılım değil. Daha iyi yönetilen şirketler.
        </h1>
        <p className="mt-[var(--space-2xl)] max-w-[680px] font-sans text-[21px] leading-[1.45] text-[var(--color-warm-gray)] md:text-[24px]">
          Aykut Karaca; Türk KOBİ ve aile şirketleri için karar, rol, KPI,
          süreç ve yönetim ritmi kuran stratejik operatördür. Yazılım araç,
          yönetim sistemi amaçtır.
        </p>
        <div className="mt-[var(--space-2xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
          <Link
            href="/manifesto"
            className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)] hover:opacity-95 hover:shadow-[0_24px_52px_rgba(0,0,0,0.20)]"
          >
            Manifestoyu oku
          </Link>
          <Link
            href="/dogru-yer-mi"
            className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)] shadow-[0_14px_30px_rgba(0,0,0,0.055)] backdrop-blur-xl"
          >
            Doğru yer mi?
          </Link>
        </div>
      </div>

      <figure className="relative">
        <div className="absolute -inset-5 rounded-[42px] bg-[radial-gradient(circle_at_68%_12%,rgba(255,224,207,0.95),rgba(255,255,255,0)_46%)] blur-xl" />
        <div className="surface-raised relative overflow-hidden rounded-[34px] bg-[var(--color-cream)] p-[10px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[var(--color-cream-soft)]">
            <Image
              src="/images/portraits/aykut-karaca-portrait-01.jpg"
              alt="Aykut Karaca portre fotoğrafı"
              fill
              priority
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative mt-[var(--space-md)] flex flex-wrap gap-[var(--space-sm)]">
          <span className="mini-pill">Karar</span>
          <span className="mini-pill">KPI</span>
          <span className="mini-pill">Süreç</span>
          <span className="mini-pill">Ritim</span>
        </div>
      </figure>
    </section>
  );
}
