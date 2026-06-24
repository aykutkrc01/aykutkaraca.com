import Link from 'next/link';

type BrandLink = {
  href: string;
  label: string;
  hint: string;
};

const BRAND_LINKS: BrandLink[] = [
  {
    href: 'https://tomorrowdigital.com.tr',
    label: 'Tomorrow Digital',
    hint: 'Danışmanlık',
  },
  {
    href: 'https://tarif.co',
    label: 'TARİF',
    hint: 'Dikey SaaS',
  },
  {
    href: 'https://tomorrowhr.co',
    label: 'TomorrowHR',
    hint: 'Geçmiş uzmanlık',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-[120px] border-t border-[var(--color-border)] bg-[var(--color-cream)]">
      <div className="container-page py-[var(--space-4xl)] md:py-[96px]">
        <div className="grid grid-cols-1 gap-[var(--space-4xl)] md:grid-cols-3">
          {/* Sol — marka ve ilke */}
          <div className="md:col-span-1">
            <p className="font-sans text-[24px] font-medium leading-[1.05] text-[var(--color-charcoal)]">
              Aykut Karaca
            </p>
            <p className="mt-[var(--space-sm)] font-sans text-[13px] text-[var(--color-warm-gray)]">
              Stratejik Düşünce Merkezi
            </p>
            <p className="mt-[var(--space-xl)] max-w-[260px] font-sans text-[15px] leading-[1.55] text-[var(--color-warm-gray)]">
              Örüntü yayınlanır, vaka yayınlanmaz.
            </p>
          </div>

          {/* Orta — bülten hazırlık alanı */}
          <div className="md:col-span-1">
            <p className="font-sans text-[13px] font-medium text-[var(--color-warm-gray)]">
              Bülten
            </p>
            <p className="mt-[var(--space-sm)] font-sans text-[16px] leading-[1.55] text-[var(--color-charcoal)]">
              Yazılar yayınlandığında haber veren sade bir bülten altyapısı hazırlanıyor.
            </p>

            <p className="mt-[var(--space-md)] inline-flex rounded-full bg-[var(--color-surface)] px-[var(--space-lg)] py-[12px] font-sans text-[13px] font-medium text-[var(--color-warm-gray)] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]">
              Supabase sonrası açılacak
            </p>
          </div>

          {/* Sağ — marka köprüleri */}
          <div className="md:col-span-1">
            <p className="font-sans text-[13px] font-medium text-[var(--color-warm-gray)]">
              Çalışmalar
            </p>
            <ul className="mt-[var(--space-md)] flex flex-col gap-[var(--space-md)]">
              {BRAND_LINKS.map((b) => (
                <li key={b.href}>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-col"
                  >
                    <span className="font-sans text-[17px] font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-ink)]">
                      {b.label}
                    </span>
                    <span className="font-sans text-[12px] text-[var(--color-warm-gray)]">
                      {b.hint}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alt bant */}
        <div className="mt-[var(--space-3xl)] flex flex-col gap-[var(--space-sm)] border-t border-[var(--color-border)] pt-[var(--space-lg)] md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] text-[var(--color-warm-gray)]">
            © {year} Aykut Karaca · aykutkaraca.com
          </p>
          <ul className="flex flex-wrap gap-[var(--space-lg)]">
            <li>
              <Link
                href="/manifesto"
                className="font-sans text-[12px] text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
              >
                Manifesto
              </Link>
            </li>
            <li>
              <Link
                href="/dogru-yer-mi"
                className="font-sans text-[12px] text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
              >
                Doğru yer mi?
              </Link>
            </li>
            <li>
              <a
                href="/rss.xml"
                className="font-sans text-[12px] text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]"
              >
                RSS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
