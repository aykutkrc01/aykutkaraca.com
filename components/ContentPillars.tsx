const PILLARS = [
  {
    title: 'Yönetim Sistemi',
    text: 'Karar, rol, KPI, süreç ve ritim aynı hatta bağlanmadığında şirket kişilere bağımlı kalır.',
    examples: ['Karar mimarisi', 'Yönetim ritmi', 'KPI sahipliği'],
  },
  {
    title: 'Dijital Dönüşüm',
    text: 'Yazılım seçimi, önce hangi yönetim davranışının kurulacağı netleştiğinde değer üretir.',
    examples: ['Süreç tasarımı', 'Dashboard', 'Otomasyon'],
  },
  {
    title: 'İnsan ve Liderlik',
    text: 'Kurucu sezgisi, büyüyen ekiplerin taşıyabileceği ortak dile ve sorumluluk sistemine çevrilmelidir.',
    examples: ['Aile şirketi', 'Rol netliği', 'Ekip hizası'],
  },
];

export default function ContentPillars() {
  return (
    <section className="py-[96px]">
      <div className="max-w-[860px]">
        <p className="eyebrow">İçerik mimarisi</p>
        <h2 className="mt-[var(--space-lg)] text-section">
          Yazılar üç ana sorunun etrafında büyür.
        </h2>
        <p className="mt-[var(--space-xl)] max-w-[640px] font-sans text-[18px] leading-[1.6] text-[var(--color-warm-gray)]">
          Aykutkaraca.com, KOBİ ve aile şirketlerinde yönetilebilir büyüme için
          düşünce üretir. Her yazı ya sistemi kurar, ya dijitalleşmeyi doğru
          sıraya koyar, ya da liderlik yükünü görünür hale getirir.
        </p>
      </div>

      <div className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3">
        {PILLARS.map((pillar, index) => (
          <article
            key={pillar.title}
            className="surface-raised rounded-[32px] p-[var(--space-xl)] md:p-[var(--space-2xl)]"
          >
            <span className="mini-pill">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-[var(--space-xl)] font-sans text-[34px] font-medium leading-[1.06]">
              {pillar.title}
            </h3>
            <p className="mt-[var(--space-lg)] font-sans text-[17px] leading-[1.58] text-[var(--color-warm-gray)]">
              {pillar.text}
            </p>
            <div className="mt-[var(--space-xl)] flex flex-wrap gap-[var(--space-sm)]">
              {pillar.examples.map((example) => (
                <span key={example} className="tile-cta">
                  {example}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
