import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createPageMetadata({
  title: 'Manifesto',
  description:
    'Daha fazla yazılım değil, daha iyi yönetilen şirketler. Aykut Karaca’nın yönetim sistemi yaklaşımının ana tezi.',
  path: '/manifesto',
});

const THESIS_CARDS = [
  {
    label: '01',
    title: 'Yazılım araçtır.',
    text: 'Araç, yanlış yönetim davranışını tek başına düzeltmez. Önce karar dili netleşir.',
    tone: 'problem-white',
  },
  {
    label: '02',
    title: 'Sistem amaçtır.',
    text: 'Rol, KPI, süreç ve ritim aynı hatta bağlanmadıkça şirket ortak akıl üretemez.',
    tone: 'problem-mist',
  },
  {
    label: '03',
    title: 'Dashboard sonuçtur.',
    text: 'Dashboard bir ekran değil, şirketin nasıl karar aldığının görünür hale gelmiş sonucudur.',
    tone: 'problem-apricot',
  },
];

const MANIFESTO_SECTIONS = [
  {
    title: 'Sorun çoğu zaman yazılım eksikliği değildir.',
    body: [
      'Bir şirket büyürken ilk refleks genellikle yeni bir yazılım aramak olur. CRM, ERP, dashboard, görev yönetimi, otomasyon, yapay zeka ajanı. Hepsi gerekli olabilir. Ama çoğu zaman asıl eksik bu araçların kendisi değildir.',
      'Eksik olan; kararın kime ait olduğu, hangi KPI’ın hangi davranışı değiştireceği, sürecin nerede başlayıp nerede biteceği ve kurucunun zihnindeki ritmin şirkete nasıl yayılacağıdır.',
    ],
  },
  {
    title: 'Rapor görmek yönetmek değildir.',
    body: [
      'Bir dashboard şirketi yönetmez. Dashboard sadece şirketin mevcut karar düzenini görünür yapar. Eğer karar düzeni dağınıksa, dashboard da dağınıklığı daha parlak gösterir.',
      'Bu yüzden önce soru değişir: Hangi ekranı yapalım değil, hangi kararı düzenli ve doğru hızda alacağız?',
    ],
  },
  {
    title: 'Kurucunun sezgisi sisteme çevrilmelidir.',
    body: [
      'Birçok KOBİ ve aile şirketinde iş, kurucunun sezgisiyle yürür. Bu değerli bir güçtür. Ama şirket büyüdükçe sezginin tek başına yetmesi beklenemez.',
      'İkinci kademe yöneticiler, aile üyeleri, ekip liderleri ve operasyon ekipleri aynı yönetim dilini konuşmadığında şirket kurucunun zihnine bağımlı kalır. Sistem kurmak, bu zihniyetin şirkete aktarılmasıdır.',
    ],
  },
  {
    title: 'Teknoloji yönetim sisteminin üzerine oturmalıdır.',
    body: [
      'Doğru sıra şudur: teşhis, KPI, süreç, rol, dashboard, yönetim ritmi. Yazılım bu sıranın yerine geçmez; bu sırayı daha hızlı, görünür ve sürdürülebilir hale getirir.',
      'Bu yüzden aykutkaraca.com bir yazılım vitrini değil, bir düşünce merkezidir. Burada araçlardan önce yönetim sistemi konuşulur.',
    ],
  },
];

const PRINCIPLES = [
  'Önce yönetim problemi tanımlanır, sonra teknoloji seçilir.',
  'KPI, sadece ölçmek için değil davranış değiştirmek için yazılır.',
  'Rol net değilse süreç işlemez; süreç net değilse dashboard anlam üretmez.',
  'Saha örüntüsü yayınlanır, müşteri vakası teşhir edilmez.',
  'Amaç daha fazla rapor değil, daha iyi karar ritmidir.',
];

export default function ManifestoPage() {
  return (
    <article className="container-page">
      <JsonLd
        id="manifesto-webpage-json-ld"
        data={webPageJsonLd({
          title: 'Manifesto',
          description:
            'Daha fazla yazılım değil, daha iyi yönetilen şirketler. Aykut Karaca’nın yönetim sistemi yaklaşımının ana tezi.',
          path: '/manifesto',
        })}
      />
      <JsonLd
        id="manifesto-breadcrumb-json-ld"
        data={breadcrumbJsonLd([
          { name: 'Ana sayfa', path: '/' },
          { name: 'Manifesto', path: '/manifesto' },
        ])}
      />
      <header className="py-[var(--space-4xl)] md:py-[110px]">
        <div className="brand-tile brand-tile-compact tile-ink rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div className="max-w-[980px]">
            <p className="font-sans text-[13px] font-medium text-[rgba(255,255,255,0.66)]">
              Manifesto
            </p>
            <h1 className="mt-[var(--space-lg)] max-w-[1000px] font-sans text-[52px] font-medium leading-[1.02] text-[var(--color-cream)] md:text-[92px]">
              Daha fazla yazılım değil. Daha iyi yönetilen şirketler.
            </h1>
            <p className="mt-[var(--space-2xl)] max-w-[760px] font-sans text-[20px] leading-[1.55] text-[rgba(255,255,255,0.68)] md:text-[24px]">
              Çünkü şirketin asıl ihtiyacı çoğu zaman yeni bir ekran değil;
              karar, rol, KPI, süreç ve yönetim ritminin aynı sisteme bağlanmasıdır.
            </p>
          </div>

          <div className="mt-[var(--space-3xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
            <Link
              href="/yontem"
              className="inline-flex justify-center rounded-full bg-[var(--color-cream)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
            >
              Yöntemi gör
            </Link>
            <Link
              href="/dogru-yer-mi"
              className="inline-flex justify-center rounded-full bg-[rgba(255,255,255,0.10)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
            >
              Doğru yer mi?
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-[var(--space-lg)] py-[var(--space-2xl)] md:grid-cols-3">
        {THESIS_CARDS.map((card) => (
          <div
            key={card.title}
            className={`${card.tone} surface-raised rounded-[30px] p-[var(--space-xl)] md:min-h-[320px] md:p-[var(--space-2xl)]`}
          >
            <p className="font-sans text-[13px] font-medium text-[var(--color-warm-gray)]">
              {card.label}
            </p>
            <h2 className="mt-[var(--space-2xl)] font-sans text-[34px] font-medium leading-[1.06] text-[var(--color-charcoal)] md:text-[44px]">
              {card.title}
            </h2>
            <p className="mt-[var(--space-lg)] font-sans text-[16px] leading-[1.55] text-[var(--color-warm-gray)]">
              {card.text}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-[var(--space-4xl)] py-[120px] md:grid-cols-[0.8fr_1.2fr]">
        <aside className="md:sticky md:top-[140px] md:self-start">
          <p className="eyebrow">Ana tez</p>
          <p className="mt-[var(--space-lg)] max-w-[420px] font-sans text-[34px] font-medium leading-[1.08] md:text-[48px]">
            Araçlar şirketi değil, iyi kurulmuş sistemler şirketi yönetir.
          </p>
        </aside>

        <div className="grid gap-[var(--space-3xl)]">
          {MANIFESTO_SECTIONS.map((section, index) => (
            <section key={section.title} className="border-b border-[var(--color-border)] pb-[var(--space-3xl)]">
              <p className="font-sans text-[13px] font-medium text-[var(--color-light-gray)]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-[var(--space-md)] max-w-[760px] font-sans text-[34px] font-medium leading-[1.08] md:text-[52px]">
                {section.title}
              </h2>
              <div className="mt-[var(--space-xl)] grid gap-[var(--space-lg)]">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-[760px] font-sans text-[18px] leading-[1.75] text-[var(--color-warm-gray)] md:text-[20px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-[1fr_1fr]">
        <div className="brand-tile tile-mist">
          <div>
            <p className="eyebrow">İlke</p>
            <h2 className="mt-[var(--space-lg)] font-sans text-[40px] font-medium leading-[1.04] md:text-[62px]">
              Örüntü yayınlanır. Vaka yayınlanmaz.
            </h2>
            <p className="mt-[var(--space-xl)] max-w-[560px] font-sans text-[18px] leading-[1.6] text-[var(--color-warm-gray)]">
              Müşteri adları değil, tekrar eden sorun desenleri anlatılır.
              Amaç hikaye satmak değil, yönetim prensibini görünür kılmaktır.
            </p>
          </div>
          <span className="tile-cta">Saha disiplini</span>
        </div>

        <div className="surface-raised rounded-[38px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">Çalışma ilkeleri</p>
          <ol className="mt-[var(--space-2xl)] grid gap-[var(--space-md)]">
            {PRINCIPLES.map((principle, index) => (
              <li
                key={principle}
                className="grid grid-cols-[34px_1fr] gap-[var(--space-md)] rounded-[24px] bg-[var(--color-surface)] p-[var(--space-lg)] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]"
              >
                <span className="font-sans text-[12px] font-medium text-[var(--color-light-gray)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-[18px] font-medium leading-[1.35] text-[var(--color-charcoal)]">
                  {principle}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-[var(--space-4xl)] pt-[var(--space-2xl)]">
        <div className="surface-muted rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div className="grid min-w-0 gap-[var(--space-3xl)] md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div className="min-w-0">
              <p className="eyebrow">Sonuç</p>
              <h2 className="mt-[var(--space-lg)] max-w-[760px] break-words font-sans text-[42px] font-medium leading-[1.04] md:text-[68px]">
                Yazılımı küçümsemiyoruz. Sadece yerine koyuyoruz.
              </h2>
            </div>
            <div className="min-w-0">
              <p className="font-sans text-[18px] leading-[1.65] text-[var(--color-warm-gray)]">
                Doğru yazılım, doğru yönetim sisteminin üzerinde büyük kaldıraçtır.
                Ama sistem yoksa yazılım sadece karmaşayı daha hızlı üretir.
              </p>
              <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
                <Link
                  href="/dogru-yer-mi"
                  className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
                >
                  Doğru yer mi?
                </Link>
                <Link
                  href="/yontem"
                  className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
                >
                  Yöntemi incele
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
