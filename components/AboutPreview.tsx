import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { value: 'KOBİ', label: '30-150 çalışanlı yapılar' },
  { value: 'Ritim', label: 'karar, rol ve KPI düzeni' },
  { value: 'Sistem', label: 'rapor değil çalışan operasyon' },
];

export default function AboutPreview() {
  return (
    <section className="py-[96px]">
      <div className="surface-raised grid overflow-hidden rounded-[42px] md:grid-cols-[0.72fr_1.28fr]">
        <div className="relative min-h-[360px] bg-[var(--color-surface)] md:min-h-[520px]">
          <Image
            src="/images/portraits/aykut-karaca-portrait-01.jpg"
            alt="Aykut Karaca portre fotoğrafı"
            fill
            sizes="(min-width: 768px) 34vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(255,255,255,0.28)_100%)]" />
        </div>

        <div className="flex flex-col justify-between p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div>
            <p className="eyebrow">Hakkında</p>
            <h2 className="mt-[var(--space-lg)] max-w-[760px] font-sans text-[38px] font-medium leading-[1.04] md:text-[62px]">
              Entelektüel danışman değil. Sahada çalışan sistem kuran kişi.
            </h2>
            <p className="mt-[var(--space-xl)] max-w-[650px] font-sans text-[18px] leading-[1.6] text-[var(--color-warm-gray)] md:text-[20px]">
              Aykut Karaca, kurucu sezgisini şirketin ortak yönetim diline çevirir.
              Kararların kime ait olduğunu, KPI’ların neyi değiştireceğini ve
              yazılımın hangi yönetim ritmine hizmet edeceğini netleştirir.
            </p>
          </div>

          <div className="mt-[var(--space-3xl)] grid gap-[var(--space-md)] md:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[24px] bg-[var(--color-surface)] p-[var(--space-lg)] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]"
              >
                <p className="font-sans text-[22px] font-medium leading-none text-[var(--color-charcoal)]">
                  {stat.value}
                </p>
                <p className="mt-[var(--space-sm)] font-sans text-[13px] leading-[1.45] text-[var(--color-warm-gray)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/hakkinda"
            className="mt-[var(--space-2xl)] inline-flex w-max rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-lg)] py-[12px] font-sans text-[14px] font-medium text-[var(--color-charcoal)] shadow-[0_14px_30px_rgba(0,0,0,0.055)]"
          >
            Hikayeyi gör
          </Link>
        </div>
      </div>
    </section>
  );
}
