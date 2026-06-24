import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createPageMetadata({
  title: 'Yöntem',
  description:
    'Aykut Karaca yöntemi: teşhis, KPI, süreç, rol, dashboard ve yönetim ritmi ile çalışan yönetim sistemi kurmak.',
  path: '/yontem',
});

const METHOD_STEPS = [
  {
    number: '01',
    title: 'Teşhis',
    promise: 'Sorunu araç seviyesinden yönetim davranışı seviyesine indirir.',
    output: 'Net problem cümlesi',
    detail:
      'İlk iş hangi yazılımın eksik olduğunu konuşmak değildir. Şirketin hangi kararı alamadığı, hangi davranışı sürdüremediği ve hangi ritimde aksadığı tanımlanır.',
    tone: 'tile-mist',
  },
  {
    number: '02',
    title: 'KPI',
    promise: 'Ölçümü rapordan çıkarıp davranış değişikliğine bağlar.',
    output: 'KPI sözlüğü',
    detail:
      'Her metrik eşit değildir. KPI; sahibi, frekansı, hedef davranışı ve aksiyon bağlantısıyla birlikte yazılır. Ölçüm, yönetim dilinin parçası olur.',
    tone: 'tile-peach',
  },
  {
    number: '03',
    title: 'Süreç',
    promise: 'İşin nerede başlayıp nerede bittiğini görünür yapar.',
    output: 'Süreç haritası',
    detail:
      'Süreç yalnızca operasyon çizimi değildir. Kararın hangi noktada doğduğu, hangi veriyle beslendiği ve hangi çıktıyla kapandığı netleşir.',
    tone: 'tile-rose',
  },
  {
    number: '04',
    title: 'Rol',
    promise: 'Yetki, sorumluluk ve karar haklarını aynı masaya koyar.',
    output: 'Rol ve karar matrisi',
    detail:
      'Kim karar verir, kim hazırlar, kim uygular, kim takip eder? Rol net değilse dashboard doğru olsa bile davranış değişmez.',
    tone: 'tile-mist',
  },
  {
    number: '05',
    title: 'Dashboard',
    promise: 'Ekranı sonuç katmanı olarak konumlandırır.',
    output: 'Dashboard mantığı',
    detail:
      'Dashboard önce güzel görünmek için değil, doğru kararı hızlandırmak için tasarlanır. Ekrandaki her alan bir yönetim sorusuna cevap verir.',
    tone: 'tile-peach',
  },
  {
    number: '06',
    title: 'Yönetim ritmi',
    promise: 'Sistemi günlük ve haftalık çalışma düzenine bağlar.',
    output: 'Toplantı ve takip ritmi',
    detail:
      'Sistem, takvimde yer bulmadıkça yaşama geçmez. Haftalık, aylık ve çeyreklik ritimler karar kalitesini düzenli hale getirir.',
    tone: 'tile-rose',
  },
];

const PRINCIPLES = [
  {
    title: 'Önce karar',
    text: 'Her çalışma “hangi kararı daha doğru ve daha hızlı alacağız?” sorusuyla başlar.',
  },
  {
    title: 'Sonra sistem',
    text: 'KPI, süreç, rol ve ritim aynı hatta bağlanmadan teknoloji kalıcı sonuç üretmez.',
  },
  {
    title: 'En son araç',
    text: 'Yazılım, dashboard ve yapay zeka doğru sistemin üzerine konduğunda kaldıraç olur.',
  },
];

const DELIVERABLES = [
  'Problem ve karar haritası',
  'KPI sözlüğü ve davranış bağlantısı',
  'Süreç ve rol matrisi',
  'Dashboard bilgi mimarisi',
  'Haftalık / aylık yönetim ritmi',
  'Tomorrow Digital veya ilgili uygulama yönlendirmesi',
];

export default function YontemPage() {
  return (
    <div className="container-page">
      <JsonLd
        id="yontem-webpage-json-ld"
        data={webPageJsonLd({
          title: 'Yöntem',
          description:
            'Aykut Karaca yöntemi: teşhis, KPI, süreç, rol, dashboard ve yönetim ritmi ile çalışan yönetim sistemi kurmak.',
          path: '/yontem',
        })}
      />
      <JsonLd
        id="yontem-breadcrumb-json-ld"
        data={breadcrumbJsonLd([
          { name: 'Ana sayfa', path: '/' },
          { name: 'Yöntem', path: '/yontem' },
        ])}
      />
      <header className="py-[var(--space-4xl)] md:py-[112px]">
        <div className="max-w-[1100px]">
          <p className="eyebrow">Yöntem</p>
          <h1 className="mt-[var(--space-lg)] font-sans text-[58px] font-medium leading-[1.02] tracking-[-0.02em] md:text-[118px]">
            Rapor değil. Çalışan sistem.
          </h1>
          <p className="mt-[var(--space-2xl)] max-w-[780px] font-sans text-[20px] leading-[1.6] text-[var(--color-warm-gray)] md:text-[24px]">
            Amaç daha fazla ekran üretmek değil; şirketin karar, KPI, süreç,
            rol ve ritim düzenini birlikte çalışır hale getirmek.
          </p>
        </div>
      </header>

      <section className="pb-[var(--space-4xl)]">
        <div className="brand-tile brand-tile-compact tile-ink rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div className="grid gap-[var(--space-3xl)] md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="font-sans text-[13px] font-medium text-[rgba(255,255,255,0.66)]">
                Çalışma sırası
              </p>
              <h2 className="mt-[var(--space-lg)] max-w-[720px] font-sans text-[46px] font-medium leading-[1.02] text-[var(--color-cream)] md:text-[82px]">
                Önce yönetim problemi. Sonra teknoloji.
              </h2>
            </div>
            <ol className="grid gap-[var(--space-sm)]">
              {METHOD_STEPS.map((step) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[42px_1fr] items-center gap-[var(--space-md)] rounded-[22px] bg-[rgba(255,255,255,0.08)] px-[var(--space-lg)] py-[var(--space-md)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                >
                  <span className="font-sans text-[12px] font-medium text-[rgba(255,255,255,0.56)]">
                    {step.number}
                  </span>
                  <span className="font-sans text-[20px] font-medium leading-[1.2] text-[var(--color-cream)] md:text-[26px]">
                    {step.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <article
            key={principle.title}
            className="surface-raised rounded-[34px] p-[var(--space-xl)] md:min-h-[300px] md:p-[var(--space-2xl)]"
          >
            <h2 className="font-sans text-[40px] font-medium leading-[1.04] md:text-[58px]">
              {principle.title}
            </h2>
            <p className="mt-[var(--space-xl)] font-sans text-[18px] leading-[1.58] text-[var(--color-warm-gray)]">
              {principle.text}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-[var(--space-4xl)] py-[120px] md:grid-cols-[0.75fr_1.25fr]">
        <aside className="md:sticky md:top-[140px] md:self-start">
          <p className="eyebrow">Altı adım</p>
          <h2 className="mt-[var(--space-lg)] max-w-[440px] font-sans text-[40px] font-medium leading-[1.06] md:text-[64px]">
            Her adım somut bir çıktı üretir.
          </h2>
          <p className="mt-[var(--space-xl)] max-w-[380px] font-sans text-[18px] leading-[1.6] text-[var(--color-warm-gray)]">
            Böylece çalışma sunumda kalmaz; yönetim diline, takvime ve karar
            ritmine bağlanır.
          </p>
        </aside>

        <div className="grid gap-[var(--space-xl)]">
          {METHOD_STEPS.map((step) => (
            <article
              key={step.title}
              className={`brand-tile brand-tile-compact ${step.tone} min-h-[360px]`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-[var(--space-md)]">
                  <span className="mini-pill">{step.number}</span>
                  <span className="mini-pill">{step.output}</span>
                </div>
                <h3 className="mt-[var(--space-2xl)] max-w-[760px] font-sans text-[44px] font-medium leading-[1.02] md:text-[72px]">
                  {step.title}
                </h3>
                <p className="mt-[var(--space-lg)] max-w-[720px] font-sans text-[21px] font-medium leading-[1.35] text-[var(--color-charcoal)] md:text-[28px]">
                  {step.promise}
                </p>
              </div>
              <p className="mt-[var(--space-xl)] max-w-[720px] font-sans text-[18px] leading-[1.62] text-[var(--color-warm-gray)]">
                {step.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-[1fr_1fr]">
        <div className="surface-muted rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">Çıktılar</p>
          <h2 className="mt-[var(--space-lg)] font-sans text-[42px] font-medium leading-[1.04] md:text-[68px]">
            Çalışma sonunda ne netleşir?
          </h2>
        </div>
        <ul className="surface-raised grid gap-[var(--space-md)] rounded-[42px] p-[var(--space-md)] md:p-[var(--space-lg)]">
          {DELIVERABLES.map((deliverable, index) => (
            <li
              key={deliverable}
              className="grid grid-cols-[42px_1fr] items-center gap-[var(--space-md)] rounded-[24px] bg-[var(--color-surface)] px-[var(--space-lg)] py-[var(--space-lg)] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]"
            >
              <span className="font-sans text-[12px] font-medium text-[var(--color-light-gray)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-sans text-[19px] font-medium leading-[1.3]">
                {deliverable}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-[var(--space-4xl)] pt-[96px]">
        <div className="brand-tile brand-tile-compact tile-mist rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div className="grid gap-[var(--space-3xl)] md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="eyebrow">Sonuç</p>
              <h2 className="mt-[var(--space-lg)] max-w-[820px] font-sans text-[44px] font-medium leading-[1.02] md:text-[78px]">
                İyi sistem, kurucunun aklını şirkete yayar.
              </h2>
            </div>
            <div>
              <p className="max-w-[560px] font-sans text-[19px] leading-[1.62] text-[var(--color-warm-gray)] md:text-[22px]">
                Yöntemin amacı şirketi insansızlaştırmak değil; kurucunun
                sezgisini, ekibin birlikte kullanabileceği bir yönetim diline
                dönüştürmektir.
              </p>
              <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
                <Link
                  href="/dogru-yer-mi"
                  className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
                >
                  Doğru yer mi?
                </Link>
                <Link
                  href="/yazilar"
                  className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
                >
                  Yazıları oku
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
