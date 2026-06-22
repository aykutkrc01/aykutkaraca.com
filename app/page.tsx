import Image from 'next/image';
import Link from 'next/link';

const BRIDGES = [
  {
    title: 'Tomorrow Digital',
    text: 'KOBİ ve aile şirketleri için yönetim sistemi, dashboard ve AI destekli teslimat katmanı.',
    href: 'https://tomorrowdigital.co',
  },
  {
    title: 'TARİF',
    text: 'Gıda üreticileri için reçete, üretim, stok ve izlenebilirlik odaklı dikey SaaS.',
    href: 'https://tarif.co',
  },
  {
    title: 'TomorrowHR',
    text: 'İK ve organizasyon geçmiş uzmanlığı; yeni yapıda Tomorrow Digital yaklaşımının içinde.',
    href: 'https://tomorrowhr.co',
  },
];

const ESSAYS = [
  'KOBİ’nin sorunu neden yazılım eksikliği değildir?',
  'Dashboard neden yönetim sistemi değildir?',
  'Aile şirketinde karar mimarisi nasıl kurulur?',
];

export default function HomePage() {
  return (
    <div className="container-page">
      <section className="grid items-center gap-[var(--space-4xl)] py-[var(--space-4xl)] md:min-h-[720px] md:grid-cols-[1.34fr_0.66fr] md:py-[80px]">
        <div>
          <p className="eyebrow">Stratejik Düşünce Merkezi</p>
          <h1 className="mt-[var(--space-lg)] max-w-[920px] text-hero">
            Daha fazla yazılım değil. Daha iyi yönetilen şirketler.
          </h1>
          <p className="mt-[var(--space-2xl)] max-w-[680px] font-sans text-[21px] leading-[1.45] text-[var(--color-warm-gray)] md:text-[24px]">
            Aykut Karaca; Türk KOBİ ve aile şirketleri için karar, rol, KPI,
            süreç ve yönetim ritmi kuran stratejik operatördür. Yazılım araç,
            yönetim sistemi amaçtır.
          </p>
          <div className="mt-[var(--space-2xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
            <Link
              href="/manifesto"
              className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)]"
            >
              Manifestoyu oku
            </Link>
            <Link
              href="/dogru-yer-mi"
              className="inline-flex justify-center rounded-full border border-[var(--color-border)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
            >
              Doğru yer mi?
            </Link>
          </div>
        </div>

        <figure>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[var(--color-cream-soft)]">
            <Image
              src="/images/portraits/aykut-karaca-portrait-01.jpg"
              alt="Aykut Karaca portre fotoğrafı"
              fill
              priority
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </section>

      <section className="border-y border-[var(--color-border)] py-[96px]">
        <p className="eyebrow">Problem</p>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-3xl)] md:grid-cols-3">
          {[
            'KPI yazılı değilse dashboard karar üretmez.',
            'Yetki net değilse raporlar davranışa dönüşmez.',
            'Kurucu olmadan iş yürümüyorsa teknoloji problemi değil, sistem problemi vardır.',
          ].map((item) => (
            <p key={item} className="font-sans text-[28px] font-medium leading-[1.12] text-[var(--color-charcoal)] md:text-[34px]">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="grid gap-[var(--space-4xl)] py-[120px] md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Yöntem</p>
          <h2 className="mt-[var(--space-lg)] text-section">Rapor değil. Çalışan sistem.</h2>
        </div>
        <ol className="grid gap-[var(--space-md)]">
          {['Teşhis', 'KPI', 'Süreç', 'Rol', 'Dashboard', 'Yönetim ritmi'].map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-[var(--space-xl)] border-b border-[var(--color-border)] py-[var(--space-lg)]"
            >
              <span className="font-sans text-[12px] text-[var(--color-light-gray)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-sans text-[28px] font-medium leading-none md:text-[36px]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-[var(--space-4xl)] border-y border-[var(--color-border)] py-[96px] md:grid-cols-2">
        <div>
          <p className="eyebrow">İlk yazılar</p>
          <ul className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)]">
            {ESSAYS.map((essay) => (
              <li key={essay}>
                <span className="font-sans text-[24px] font-medium leading-[1.2] md:text-[30px]">{essay}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Saha örüntüsü</p>
          <blockquote className="mt-[var(--space-2xl)]">
            <p className="font-sans text-[36px] font-medium leading-[1.08] md:text-[52px]">
              Örüntü yayınlanır. Vaka yayınlanmaz.
            </p>
            <p className="mt-[var(--space-xl)] max-w-[560px] font-sans text-[18px] leading-[1.55] text-[var(--color-warm-gray)]">
              Müşteri adı vermeden; sorun deseni, kurulan sistem ve o sistemden
              çıkan prensip anlatılır.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="py-[120px]">
        <p className="eyebrow">Marka köprüleri</p>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3">
          {BRIDGES.map((bridge) => (
            <a
              key={bridge.title}
              href={bridge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-[var(--color-border)] pt-[var(--space-xl)]"
            >
              <h3 className="text-[28px] leading-[1.05] group-hover:opacity-70">{bridge.title}</h3>
              <p className="mt-[var(--space-lg)] font-sans text-[16px] leading-[1.55] text-[var(--color-warm-gray)]">
                {bridge.text}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
