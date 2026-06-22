import Image from 'next/image';
import Link from 'next/link';

const BRIDGES = [
  {
    title: 'Tomorrow Digital',
    text: 'KOBI ve aile sirketleri icin yonetim sistemi, dashboard ve AI destekli teslimat katmani.',
    href: 'https://tomorrowdigital.co',
  },
  {
    title: 'TARIF',
    text: 'Gida ureticileri icin recete, uretim, stok ve izlenebilirlik odakli dikey SaaS.',
    href: 'https://tarif.co',
  },
  {
    title: 'TomorrowHR',
    text: 'IK ve organizasyon gecmis uzmanligi; yeni yapida Tomorrow Digital yaklasiminin icinde.',
    href: 'https://tomorrowhr.co',
  },
];

const ESSAYS = [
  'KOBI\'nin sorunu neden yazilim eksikligi degildir?',
  'Dashboard neden yonetim sistemi degildir?',
  'Aile sirketinde karar mimarisi nasil kurulur?',
];

export default function HomePage() {
  return (
    <div className="container-page">
      <section className="grid items-end gap-[var(--space-3xl)] py-[var(--space-4xl)] md:grid-cols-[1.2fr_0.8fr] md:py-[88px]">
        <div>
          <p className="eyebrow">Stratejik Dusunce Merkezi</p>
          <h1 className="mt-[var(--space-lg)] max-w-[820px] text-hero">
            Daha fazla yazilim degil, daha iyi yonetilen sirketler.
          </h1>
          <p className="mt-[var(--space-xl)] max-w-[660px] text-body text-[var(--color-warm-gray)]">
            Aykut Karaca; Turk KOBI ve aile sirketleri icin karar, rol, KPI,
            surec ve yonetim ritmi kuran stratejik operatordur. Yazilim arac,
            yonetim sistemi amactir.
          </p>
          <div className="mt-[var(--space-2xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
            <Link
              href="/manifesto"
              className="inline-flex justify-center border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[var(--space-md)] font-sans text-[14px] font-medium text-[var(--color-cream)]"
            >
              Manifestoyu oku
            </Link>
            <Link
              href="/dogru-yer-mi"
              className="inline-flex justify-center border border-[var(--color-border)] px-[var(--space-xl)] py-[var(--space-md)] font-sans text-[14px] font-medium text-[var(--color-charcoal)]"
            >
              Dogru yer mi?
            </Link>
          </div>
        </div>

        <figure className="border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-[var(--space-sm)]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/portraits/aykut-karaca-portrait-01.jpg"
              alt="Aykut Karaca portre fotografi"
              fill
              priority
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-[var(--space-sm)] font-sans text-[12px] text-[var(--color-warm-gray)]">
            Aykut Karaca
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-[var(--color-border)] py-[var(--space-3xl)]">
        <p className="eyebrow">Problem</p>
        <div className="mt-[var(--space-lg)] grid gap-[var(--space-xl)] md:grid-cols-3">
          {[
            'KPI yazili degilse dashboard karar uretmez.',
            'Yetki net degilse raporlar davranisa donusmez.',
            'Kurucu olmadan is yurumuyorsa teknoloji problemi degil, sistem problemi vardir.',
          ].map((item) => (
            <p key={item} className="font-serif text-[21px] leading-[1.35] text-[var(--color-charcoal)]">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="grid gap-[var(--space-3xl)] py-[var(--space-4xl)] md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Yontem</p>
          <h2 className="mt-[var(--space-md)] text-section">Rapor degil, calisan sistem.</h2>
        </div>
        <ol className="grid gap-[var(--space-md)]">
          {['Teshis', 'KPI', 'Surec', 'Rol', 'Dashboard', 'Yonetim ritmi'].map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-[var(--space-md)] border-b border-[var(--color-border)] pb-[var(--space-md)]"
            >
              <span className="font-sans text-[12px] text-[var(--color-light-gray)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-[20px]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-[var(--space-2xl)] py-[var(--space-3xl)] md:grid-cols-2">
        <div>
          <p className="eyebrow">Ilk yazilar</p>
          <ul className="mt-[var(--space-lg)] grid gap-[var(--space-md)]">
            {ESSAYS.map((essay) => (
              <li key={essay} className="border-l-2 border-[var(--color-ink)] pl-[var(--space-md)]">
                <span className="font-serif text-[19px] leading-[1.35]">{essay}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Saha oruntusu</p>
          <blockquote className="mt-[var(--space-lg)] border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-[var(--space-xl)]">
            <p className="font-serif text-[22px] leading-[1.4]">
              Oruntu yayinlanir, vaka yayinlanmaz.
            </p>
            <p className="mt-[var(--space-md)] font-sans text-[14px] leading-[1.6] text-[var(--color-warm-gray)]">
              Musteri adi vermeden; sorun deseni, kurulan sistem ve o sistemden
              cikan prensip anlatilir.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-[var(--space-4xl)]">
        <p className="eyebrow">Marka kopruleri</p>
        <div className="mt-[var(--space-lg)] grid gap-[var(--space-md)] md:grid-cols-3">
          {BRIDGES.map((bridge) => (
            <a
              key={bridge.title}
              href={bridge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-[var(--space-xl)]"
            >
              <h3 className="text-[22px] leading-[1.2]">{bridge.title}</h3>
              <p className="mt-[var(--space-md)] font-sans text-[14px] leading-[1.6] text-[var(--color-warm-gray)]">
                {bridge.text}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
