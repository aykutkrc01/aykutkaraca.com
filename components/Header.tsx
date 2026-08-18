import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container-page flex items-center justify-between py-[var(--space-lg)] md:py-[var(--space-xl)]">
        {/* Marka — Logo + altyazı */}
        <Link
          href="/"
          className="group inline-flex flex-col leading-none"
          aria-label="Aykut Karaca — Ana sayfa"
        >
          <span className="font-sans text-[20px] font-medium leading-none text-[var(--color-charcoal)] md:text-[24px]">
            Aykut Karaca
          </span>
          <span className="mt-[4px] font-sans text-[12px] text-[var(--color-warm-gray)]">
            Stratejik Düşünce Merkezi
          </span>
        </Link>
      </div>
    </header>
  );
}
