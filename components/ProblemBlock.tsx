type ProblemItem = {
  title: string;
  label: string;
  tone: string;
};

const PROBLEMS: ProblemItem[] = [
  {
    title: 'KPI yazılı değilse dashboard karar üretmez.',
    label: '01 / Ölçü',
    tone: 'problem-white',
  },
  {
    title: 'Yetki net değilse raporlar davranışa dönüşmez.',
    label: '02 / Rol',
    tone: 'problem-mist',
  },
  {
    title: 'Kurucu olmadan iş yürümüyorsa teknoloji problemi değil, sistem problemi vardır.',
    label: '03 / Ritim',
    tone: 'problem-apricot',
  },
];

export default function ProblemBlock() {
  return (
    <section className="py-[96px]">
      <div className="surface-muted rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
        <p className="eyebrow">Problem</p>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-lg)] md:grid-cols-3">
          {PROBLEMS.map((item) => (
            <article
              key={item.title}
              className={`${item.tone} surface-raised rounded-[30px] p-[var(--space-xl)] md:min-h-[320px] md:p-[var(--space-2xl)]`}
            >
              <p className="font-sans text-[13px] font-medium text-[var(--color-warm-gray)]">
                {item.label}
              </p>
              <h2 className="mt-[var(--space-2xl)] font-sans text-[28px] font-medium leading-[1.12] text-[var(--color-charcoal)] md:text-[34px]">
                {item.title}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
