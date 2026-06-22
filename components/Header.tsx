'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/yazilar', label: 'Yazılar' },
  { href: '/yontem', label: 'Yöntem' },
  { href: '/hakkinda', label: 'Hakkında' },
  { href: '/dogru-yer-mi', label: 'Doğru Yer Mi?' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-cream)]">
      <div className="container-page flex items-center justify-between py-[var(--space-xl)] md:py-[var(--space-2xl)]">
        {/* Marka — Logo + altyazı */}
        <Link
          href="/"
          className="group inline-flex flex-col leading-none"
          aria-label="Aykut Karaca — Ana sayfa"
        >
          <span className="font-serif text-[22px] md:text-[26px] tracking-[-0.01em] text-[var(--color-charcoal)]">
            Aykut Karaca
          </span>
          <span className="mt-[2px] font-sans text-[11px] tracking-[0.04em] text-[var(--color-warm-gray)]">
            Yazılar ve kenar notları
          </span>
        </Link>

        {/* Masaüstü navigasyon */}
        <nav
          aria-label="Birincil navigasyon"
          className="hidden md:flex items-center gap-[var(--space-xl)]"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'font-sans text-[14px] tracking-[0.01em]',
                isActive(item.href)
                  ? 'text-[var(--color-charcoal)] font-medium'
                  : 'text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]',
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobil hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex flex-col items-end justify-center gap-[5px] p-[var(--space-sm)] -mr-[var(--space-sm)]"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[1.5px] w-[22px] bg-[var(--color-charcoal)]" />
          <span className="block h-[1.5px] w-[18px] bg-[var(--color-charcoal)]" />
          <span className="block h-[1.5px] w-[14px] bg-[var(--color-charcoal)]" />
        </button>
      </div>

      {/* Mobil menü — stack */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobil navigasyon"
          className="md:hidden border-t border-[var(--color-border)]"
        >
          <ul className="container-page flex flex-col py-[var(--space-md)]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    'block py-[var(--space-md)] font-sans text-[15px]',
                    isActive(item.href)
                      ? 'text-[var(--color-charcoal)] font-medium'
                      : 'text-[var(--color-warm-gray)]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
