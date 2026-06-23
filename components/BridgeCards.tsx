type Bridge = {
  title: string;
  kicker: string;
  text: string;
  href: string;
};

const BRIDGES: Bridge[] = [
  {
    title: 'Tomorrow Digital',
    kicker: 'Yönetim sistemi',
    text: 'KOBİ ve aile şirketleri için süreç, KPI, dashboard ve AI destekli teslimat katmanı.',
    href: 'https://tomorrowdigital.co',
  },
  {
    title: 'TARİF',
    kicker: 'Dikey SaaS',
    text: 'Gıda üreticileri için reçete, üretim, stok ve izlenebilirlik odağı.',
    href: 'https://tarif.co',
  },
  {
    title: 'TomorrowHR',
    kicker: 'Organizasyon hafızası',
    text: 'İK ve organizasyon geçmiş uzmanlığı; bugün yönetim sistemi yaklaşımını besleyen damar.',
    href: 'https://tomorrowhr.co',
  },
];

export default function BridgeCards() {
  return (
    <section className="rhythm-md border-t border-[var(--color-border)]">
      <div className="max-w-[640px]">
        <p className="eyebrow">Marka köprüleri</p>
        <h2 className="mt-[var(--space-lg)] text-section">
          Düşünce merkezi işi doğru adrese yönlendirir.
        </h2>
      </div>
      <ul className="mt-[var(--space-3xl)] divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {BRIDGES.map((bridge) => (
          <li key={bridge.title}>
            <a
              href={bridge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[1fr_auto] items-baseline gap-[var(--space-xl)] py-[var(--space-2xl)] md:grid-cols-[200px_1fr_auto]"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[var(--color-warm-gray)]">
                {bridge.kicker}
              </span>
              <div>
                <h3 className="font-serif text-[32px] font-light leading-[1.05] text-[var(--color-charcoal)] md:text-[40px]">
                  {bridge.title}
                </h3>
                <p className="mt-[var(--space-md)] max-w-[60ch] font-sans text-[15px] leading-[1.55] text-[var(--color-warm-gray)]">
                  {bridge.text}
                </p>
              </div>
              <span
                aria-hidden
                className="font-sans text-[14px] text-[var(--color-warm-gray)] transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[4px] group-hover:text-[var(--color-charcoal)]"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
