import Link from 'next/link';
import { essays } from '@/lib/essays';

export default function RecentEssays() {
  return (
    <section className="surface-raised rounded-[38px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
      <div className="flex flex-col gap-[var(--space-md)] md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">İlk yazı stratejisi</p>
          <h2 className="mt-[var(--space-lg)] max-w-[520px] font-sans text-[32px] font-medium leading-[1.05] md:text-[44px]">
            Temel tezden pratik yönetim modeline uzanan ilk seri.
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
        {essays.map((essay) => (
          <li key={essay.slug}>
            <Link
              href={`/yazilar/${essay.slug}`}
              className="block rounded-[24px] bg-[var(--color-surface)] px-[var(--space-lg)] py-[var(--space-lg)] font-sans shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)] hover:opacity-100 hover:shadow-[inset_0_0_0_1px_rgba(11,11,11,0.08),0_18px_42px_rgba(0,0,0,0.07)]"
            >
              <span className="block text-[13px] font-medium text-[var(--color-warm-gray)]">
                {essay.category} · {essay.readingTime}
              </span>
              <span className="mt-[var(--space-sm)] block text-[24px] font-medium leading-[1.2] md:text-[30px]">
                {essay.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
