import Link from 'next/link';

const ESSAYS = [
  'KOBİ’nin sorunu neden yazılım eksikliği değildir?',
  'Dashboard neden yönetim sistemi değildir?',
  'Aile şirketinde karar mimarisi nasıl kurulur?',
];

export default function RecentEssays() {
  return (
    <section className="surface-raised rounded-[38px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
      <div className="flex flex-col gap-[var(--space-md)] md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">İlk yazılar</p>
          <h2 className="mt-[var(--space-lg)] max-w-[520px] font-sans text-[32px] font-medium leading-[1.05] md:text-[44px]">
            Düşünceyi yazıya, yazıyı sisteme bağlayan notlar.
          </h2>
        </div>
        <Link
          href="/yazilar"
          className="inline-flex w-max rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-lg)] py-[12px] font-sans text-[14px] font-medium text-[var(--color-charcoal)]"
        >
          Tüm yazıları gör
        </Link>
      </div>
      <ul className="mt-[var(--space-2xl)] grid gap-[var(--space-md)]">
        {ESSAYS.map((essay) => (
          <li key={essay}>
            <span className="block rounded-[24px] bg-[var(--color-surface)] px-[var(--space-lg)] py-[var(--space-lg)] font-sans text-[24px] font-medium leading-[1.2] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)] md:text-[30px]">
              {essay}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
