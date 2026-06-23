import Link from 'next/link';
import { essays } from '@/lib/essays';

export default function RecentEssays() {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-[var(--space-lg)]">
        <p className="eyebrow">Yazılar</p>
        <Link
          href="/yazilar"
          className="lift-link inline-flex items-center border-b border-transparent pb-[2px] font-sans text-[13px] text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
        >
          Tümü →
        </Link>
      </div>
      <ul className="divide-y divide-[var(--color-border)]">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <Link
              href={`/yazilar/${essay.slug}`}
              className="group flex flex-col gap-[var(--space-sm)] py-[var(--space-xl)] hover:opacity-100"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[var(--color-warm-gray)]">
                {essay.category} · {essay.readingTime}
              </span>
              <span className="font-serif text-[24px] font-light leading-[1.2] text-[var(--color-charcoal)] md:text-[28px]">
                {essay.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
