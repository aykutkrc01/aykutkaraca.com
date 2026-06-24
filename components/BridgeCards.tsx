type Bridge = {
  title: string;
  kicker: string;
  text: string;
  href: string;
  cta: string;
  tone: string;
};

const BRIDGES: Bridge[] = [
  {
    title: 'Tomorrow Digital',
    kicker: 'Yönetim sistemi',
    text: 'KOBİ ve aile şirketleri için süreç, KPI, dashboard ve AI destekli teslimat katmanı.',
    href: 'https://tomorrowdigital.com.tr',
    cta: 'Tomorrow Digital’a git',
    tone: 'tile-ink',
  },
  {
    title: 'TARİF',
    kicker: 'Dikey SaaS',
    text: 'Gıda üreticileri için reçete, üretim, stok ve izlenebilirlik odağı.',
    href: 'https://tarif.co',
    cta: 'TARİF’e git',
    tone: 'tile-peach',
  },
  {
    title: 'TomorrowHR',
    kicker: 'Organizasyon hafızası',
    text: 'İK ve organizasyon geçmiş uzmanlığı; bugün yönetim sistemi yaklaşımını besleyen damar.',
    href: 'https://tomorrowhr.co',
    cta: 'TomorrowHR’a git',
    tone: 'tile-rose',
  },
];

export default function BridgeCards() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[820px]">
        <p className="eyebrow">Marka köprüleri</p>
        <h2 className="mt-[var(--space-lg)] text-section">
          Düşünce merkezi işi doğru adrese yönlendirir.
        </h2>
      </div>
      <div className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3">
        {BRIDGES.map((bridge) => (
          <a
            key={bridge.title}
            href={bridge.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`brand-tile ${bridge.tone}`}
          >
            <div>
              <p className="font-sans text-[13px] font-medium tile-muted">
                {bridge.kicker}
              </p>
              <h3 className="mt-[var(--space-lg)] font-sans text-[42px] font-medium leading-[0.98] md:text-[54px]">
                {bridge.title}
              </h3>
              <p className="mt-[var(--space-lg)] max-w-[360px] font-sans text-[17px] leading-[1.5] tile-muted">
                {bridge.text}
              </p>
            </div>
            <span className="tile-cta">{bridge.cta}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
