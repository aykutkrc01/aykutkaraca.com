import Image from 'next/image';
import Link from 'next/link';

const BRIDGES = [
  {
    title: 'Tomorrow Digital',
    kicker: 'Yönetim sistemi',
    text: 'KOBİ ve aile şirketleri için süreç, KPI, dashboard ve AI destekli teslimat katmanı.',
    href: 'https://tomorrowdigital.co',
    cta: "Tomorrow Digital'a git",
    tone: 'tile-ink',
  },
  {
    title: 'TARİF',
    kicker: 'Dikey SaaS',
    text: 'Gıda üreticileri için reçete, üretim, stok ve izlenebilirlik odağı.',
    href: 'https://tarif.co',
    cta: "TARİF'e git",
    tone: 'tile-peach',
  },
  {
    title: 'TomorrowHR',
    kicker: 'Organizasyon hafızası',
    text: 'İK ve organizasyon geçmiş uzmanlığı; bugün yönetim sistemi yaklaşımını besleyen damar.',
    href: 'https://tomorrowhr.co',
    cta: "TomorrowHR'a git",
    tone: 'tile-rose',
  },
];

const PROBLEMS = [
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

const ESSAYS = [
  'KOBİ’nin sorunu neden yazılım eksikliği değildir?',
  'Dashboard neden yönetim sistemi değildir?',
  'Aile şirketinde karar mimarisi nasıl kurulur?',
];

export default function HomePage() {
  return (
    <div className="container-page">
      <section className="relative grid items-center gap-[var(--space-4xl)] py-[var(--space-4xl)] md:min-h-[720px] md:grid-cols-[1.34fr_0.66fr] md:py-[80px]">
        <div className="pointer-events-none absolute left-[-12%] top-[14%] h-[360px] w-[360px] rounded-full bg-[var(--color-surface)] opacity-80 blur-3xl" />
        <div className="relative">
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
              className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)] hover:opacity-95 hover:shadow-[0_24px_52px_rgba(0,0,0,0.20)]"
            >
              Manifestoyu oku
            </Link>
            <Link
              href="/dogru-yer-mi"
              className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)] shadow-[0_14px_30px_rgba(0,0,0,0.055)] backdrop-blur-xl"
            >
              Doğru yer mi?
            </Link>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -inset-5 rounded-[42px] bg-[radial-gradient(circle_at_68%_12%,rgba(255,224,207,0.95),rgba(255,255,255,0)_46%)] blur-xl" />
          <div className="surface-raised relative overflow-hidden rounded-[34px] bg-[var(--color-cream)] p-[10px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[var(--color-cream-soft)]">
              <Image
                src="/images/portraits/aykut-karaca-portrait-01.jpg"
                alt="Aykut Karaca portre fotoğrafı"
                fill
                priority
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative mt-[var(--space-md)] flex flex-wrap gap-[var(--space-sm)]">
            <span className="mini-pill">Karar</span>
            <span className="mini-pill">KPI</span>
            <span className="mini-pill">Süreç</span>
            <span className="mini-pill">Ritim</span>
          </div>
        </figure>
      </section>

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

      <section className="grid gap-[var(--space-4xl)] py-[120px] md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Yöntem</p>
          <h2 className="mt-[var(--space-lg)] text-section">Rapor değil. Çalışan sistem.</h2>
          <p className="mt-[var(--space-xl)] max-w-[420px] font-sans text-[18px] leading-[1.55] text-[var(--color-warm-gray)]">
            Her adım bir çıktı üretir. Yönetim dili, şirketin günlük karar ritmine bağlanır.
          </p>
        </div>
        <ol className="surface-raised grid gap-0 rounded-[36px] p-[var(--space-md)] md:p-[var(--space-lg)]">
          {['Teşhis', 'KPI', 'Süreç', 'Rol', 'Dashboard', 'Yönetim ritmi'].map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-[var(--space-xl)] rounded-[24px] px-[var(--space-lg)] py-[var(--space-lg)] transition-colors duration-200 hover:bg-[var(--color-surface)]"
            >
              <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--color-charcoal)] font-sans text-[11px] font-medium text-[var(--color-cream)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-sans text-[28px] font-medium leading-none md:text-[36px]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-2">
        <div className="surface-raised rounded-[38px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">İlk yazılar</p>
          <ul className="mt-[var(--space-2xl)] grid gap-[var(--space-md)]">
            {ESSAYS.map((essay) => (
              <li key={essay}>
                <span className="block rounded-[24px] bg-[var(--color-surface)] px-[var(--space-lg)] py-[var(--space-lg)] font-sans text-[24px] font-medium leading-[1.2] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)] md:text-[30px]">
                  {essay}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="brand-tile tile-mist">
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
          <span className="tile-cta">Kenar notu</span>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="max-w-[820px]">
          <p className="eyebrow">Marka köprüleri</p>
          <h2 className="mt-[var(--space-lg)] text-section">
            Düşünce merkezi işi doğru adrese yönlendirir.
          </h2>
        </div>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3">
          {BRIDGES.map((bridge) => (
            <a
              key={bridge.title}
              href={bridge.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`brand-tile ${bridge.tone}`}
            >
              <div>
                <p className="font-sans text-[13px] font-medium tile-muted">
                  {bridge.kicker}
                </p>
                <h3 className="mt-[var(--space-lg)] font-sans text-[42px] font-medium leading-[0.98] md:text-[54px]">
                  {bridge.title}
                </h3>
                <p className="mt-[var(--space-lg)] max-w-[360px] font-sans text-[17px] leading-[1.5] tile-muted">
                  {bridge.text}
                </p>
              </div>
              <span className="tile-cta">{bridge.cta}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
