import Link from 'next/link';

const SIGNALS = [
  'Kurucu olmadan karar akmıyor.',
  'Dashboard var ama davranış değişmiyor.',
  'Rol, KPI ve süreç aynı masada konuşulmuyor.',
];

export default function DogruYerCTA() {
  return (
    <section className="pb-[32px] pt-[96px]">
      <div className="brand-tile brand-tile-compact tile-ink gap-[var(--space-3xl)] rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
        <div className="grid gap-[var(--space-3xl)] md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-sans text-[13px] font-medium text-[rgba(255,255,255,0.66)]">
              Doğru Yer Mi?
            </p>
            <h2 className="mt-[var(--space-lg)] max-w-[780px] font-sans text-[42px] font-medium leading-[1.02] text-[var(--color-cream)] md:text-[72px]">
              Bu site sana mı konuşuyor?
            </h2>
            <p className="mt-[var(--space-xl)] max-w-[640px] font-sans text-[18px] leading-[1.6] text-[rgba(255,255,255,0.66)] md:text-[20px]">
              Eğer mesele yeni bir araç almaktan çok şirketin karar, yetki,
              KPI ve ritim düzenini kurmaksa doğru yerdesin.
            </p>
          </div>

          <ul className="grid gap-[var(--space-md)]">
            {SIGNALS.map((signal) => (
              <li
                key={signal}
                className="rounded-[22px] bg-[rgba(255,255,255,0.08)] px-[var(--space-lg)] py-[var(--space-md)] font-sans text-[16px] font-medium leading-[1.35] text-[var(--color-cream)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[var(--space-md)] sm:flex-row">
          <Link
            href="/dogru-yer-mi"
            className="inline-flex justify-center rounded-full bg-[var(--color-cream)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
          >
            Kendini test et
          </Link>
          <a
            href="https://tomorrowdigital.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center rounded-full bg-[rgba(255,255,255,0.10)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
          >
            Tomorrow Digital’a geç
          </a>
        </div>
      </div>
    </section>
  );
}
