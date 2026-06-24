import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Doğru Yer Mi?',
  description:
    'Aykutkaraca.com sana mı konuşuyor? KOBİ ve aile şirketleri için yönetim sistemi, karar ritmi, KPI ve dashboard sinyalleri.',
  path: '/dogru-yer-mi',
});

const SIGNALS = [
  {
    number: '01',
    title: 'Karar kurucuya geri dönüyor.',
    text: 'Ekip büyüse de kritik kararlar yine kurucunun masasında birikiyorsa mesele kişi değil, karar mimarisidir.',
    tone: 'tile-mist',
  },
  {
    number: '02',
    title: 'Dashboard var ama davranış değişmiyor.',
    text: 'Raporlar çoğalıyor, ekranlar güzelleşiyor ama ekiplerin ritmi ve öncelikleri değişmiyorsa sistem eksiktir.',
    tone: 'tile-peach',
  },
  {
    number: '03',
    title: 'Rol, KPI ve süreç ayrı konuşuluyor.',
    text: 'Yetki başka yerde, ölçüm başka yerde, süreç başka yerdeyse şirket ortak akıl üretmekte zorlanır.',
    tone: 'tile-rose',
  },
  {
    number: '04',
    title: 'Yeni yazılım beklentisi fazla büyüyor.',
    text: 'Araçtan önce hangi yönetim davranışının kurulacağı net değilse yazılım çözüm değil, erteleme olur.',
    tone: 'tile-mist',
  },
];

const RIGHT_FIT = [
  'KOBİ veya aile şirketinde büyüme sancısı yaşıyorsan.',
  'Karar, yetki, KPI ve süreç düzenini aynı sistemde toplamak istiyorsan.',
  'Dashboard’u ekran değil, yönetim ritminin sonucu olarak görmek istiyorsan.',
  'Yazılımı amaç değil, doğru sistemin kaldıraçı olarak konumlandırıyorsan.',
];

const NOT_FIT = [
  'Sadece hazır bir web sitesi, logo veya kampanya arıyorsan.',
  'Meseleyi yalnızca teknik entegrasyon olarak görüyorsan.',
  'Vaka vitrini, müşteri ismi ve hızlı başarı hikayesi bekliyorsan.',
];

const ROUTES = [
  {
    title: 'Düşünceyi derinleştir',
    text: 'Önce yaklaşımı ve ana tezi oku.',
    href: '/manifesto',
    cta: 'Manifesto',
  },
  {
    title: 'Yazılardan başla',
    text: 'KOBİ, dashboard ve aile şirketi notlarını incele.',
    href: '/yazilar',
    cta: 'Yazılar',
  },
  {
    title: 'İş tarafına geç',
    text: 'Konu artık danışmanlık ve uygulamaysa Tomorrow Digital doğru adres.',
    href: 'https://tomorrowdigital.com.tr',
    cta: 'Tomorrow Digital',
    external: true,
  },
];

export default function DogruYerMiPage() {
  return (
    <div className="container-page">
      <header className="py-[var(--space-4xl)] md:py-[112px]">
        <div className="max-w-[1080px]">
          <p className="eyebrow">Doğru Yer Mi?</p>
          <h1 className="mt-[var(--space-lg)] font-sans text-[58px] font-medium leading-[1.02] tracking-[-0.02em] md:text-[118px]">
            Bu site sana mı konuşuyor?
          </h1>
          <p className="mt-[var(--space-2xl)] max-w-[760px] font-sans text-[20px] leading-[1.6] text-[var(--color-warm-gray)] md:text-[24px]">
            Eğer aradığın şey yeni bir araçtan önce şirketin karar, rol, KPI,
            süreç ve ritim düzenini netleştirmekse burası doğru yer olabilir.
          </p>
        </div>
      </header>

      <section className="grid gap-[var(--space-xl)] pb-[var(--space-4xl)] md:grid-cols-2">
        {SIGNALS.map((signal) => (
          <div
            key={signal.title}
            className={`brand-tile brand-tile-compact ${signal.tone} min-h-[360px]`}
          >
            <div>
              <span className="mini-pill">{signal.number}</span>
              <h2 className="mt-[var(--space-2xl)] max-w-[560px] font-sans text-[38px] font-medium leading-[1.04] md:text-[58px]">
                {signal.title}
              </h2>
            </div>
            <p className="mt-[var(--space-xl)] max-w-[560px] font-sans text-[18px] leading-[1.58] text-[var(--color-warm-gray)]">
              {signal.text}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-[1fr_1fr]">
        <div className="surface-raised rounded-[38px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">Evet, doğru yerdesin</p>
          <h2 className="mt-[var(--space-lg)] font-sans text-[40px] font-medium leading-[1.04] md:text-[64px]">
            Eğer mesele yönetim sistemiyse.
          </h2>
          <ul className="mt-[var(--space-2xl)] grid gap-[var(--space-md)]">
            {RIGHT_FIT.map((item) => (
              <li
                key={item}
                className="rounded-[24px] bg-[var(--color-surface)] px-[var(--space-lg)] py-[var(--space-lg)] font-sans text-[18px] font-medium leading-[1.35] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-muted rounded-[38px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">Muhtemelen doğru yer değil</p>
          <h2 className="mt-[var(--space-lg)] font-sans text-[40px] font-medium leading-[1.04] md:text-[64px]">
            Eğer sadece çıktı arıyorsan.
          </h2>
          <ul className="mt-[var(--space-2xl)] grid gap-[var(--space-md)]">
            {NOT_FIT.map((item) => (
              <li
                key={item}
                className="rounded-[24px] bg-[rgba(255,255,255,0.72)] px-[var(--space-lg)] py-[var(--space-lg)] font-sans text-[18px] font-medium leading-[1.35] text-[var(--color-warm-gray)] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-[96px]">
        <div className="brand-tile brand-tile-compact tile-ink rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div className="grid gap-[var(--space-3xl)] md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="font-sans text-[13px] font-medium text-[rgba(255,255,255,0.66)]">
                Net karar
              </p>
              <h2 className="mt-[var(--space-lg)] max-w-[820px] font-sans text-[46px] font-medium leading-[1.02] text-[var(--color-cream)] md:text-[82px]">
                Burada araç değil, şirketin çalışma sistemi konuşulur.
              </h2>
            </div>
            <p className="max-w-[560px] font-sans text-[19px] leading-[1.6] text-[rgba(255,255,255,0.66)] md:text-[22px]">
              Yazılım, dashboard ve yapay zeka konuşulur; ama bunlar yönetim
              problemini örten vitrinler olarak değil, doğru sistemin üzerinde
              çalışan kaldıraçlar olarak ele alınır.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[var(--space-4xl)] pt-[96px]">
        <div className="max-w-[760px]">
          <p className="eyebrow">Sonraki yol</p>
          <h2 className="mt-[var(--space-lg)] font-sans text-[42px] font-medium leading-[1.04] md:text-[72px]">
            Nereden devam edeceğini seç.
          </h2>
        </div>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3">
          {ROUTES.map((route) => {
            const className =
              'brand-tile brand-tile-compact tile-mist lift-link min-h-[300px]';

            if (route.external) {
              return (
                <a
                  key={route.title}
                  href={route.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  <RouteCard route={route} />
                </a>
              );
            }

            return (
              <Link key={route.title} href={route.href} className={className}>
                <RouteCard route={route} />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function RouteCard({ route }: { route: (typeof ROUTES)[number] }) {
  return (
    <>
      <div>
        <h3 className="font-sans text-[34px] font-medium leading-[1.04] md:text-[46px]">
          {route.title}
        </h3>
        <p className="mt-[var(--space-lg)] max-w-[360px] font-sans text-[17px] leading-[1.55] text-[var(--color-warm-gray)]">
          {route.text}
        </p>
      </div>
      <span className="tile-cta">{route.cta}</span>
    </>
  );
}
