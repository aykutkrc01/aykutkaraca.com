type ProblemItem = {
  title: string;
  number: string;
  label: string;
};

const PROBLEMS: ProblemItem[] = [
  {
    title: 'KPI yazılı değilse dashboard karar üretmez.',
    number: '01',
    label: 'Ölçü',
  },
  {
    title: 'Yetki net değilse raporlar davranışa dönüşmez.',
    number: '02',
    label: 'Rol',
  },
  {
    title: 'Kurucu olmadan iş yürümüyorsa teknoloji problemi değil, sistem problemi vardır.',
    number: '03',
    label: 'Ritim',
  },
];

export default function ProblemBlock() {
  return (
    <section className="rhythm-md border-t border-[var(--color-border)]">
      <p className="eyebrow">Problem</p>
      <div className="mt-[var(--space-3xl)] grid gap-x-[var(--space-3xl)] gap-y-[var(--space-2xl)] md:grid-cols-3">
        {PROBLEMS.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-[var(--space-xl)]"
          >
            <div className="flex items-baseline gap-[var(--space-md)] font-sans text-[12px] uppercase tracking-[0.14em] text-[var(--color-warm-gray)]">
              <span>{item.number}</span>
              <span className="h-[1px] w-[24px] bg-[var(--color-border)]" />
              <span>{item.label}</span>
            </div>
            <h2 className="max-w-[28ch] font-serif text-[26px] leading-[1.18] text-[var(--color-charcoal)] md:text-[30px]">
              {item.title}
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
