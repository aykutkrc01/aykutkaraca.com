import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = createPageMetadata({
  title: 'Hakkında',
  description:
    'Aykut Karaca hakkında: KOBİ ve aile şirketleri için karar, KPI, süreç, rol, dashboard ve yönetim ritmi kuran stratejik operatör.',
  path: '/hakkinda',
});

const FOCUS_AREAS = [
  {
    title: 'Kurucu sezgisi',
    text: 'Şirketin kurucu aklını dışlamadan, onu tekrar edilebilir yönetim diline çevirir.',
    tone: 'tile-mist',
  },
  {
    title: 'Yönetim sistemi',
    text: 'Karar, rol, KPI, süreç ve ritmi aynı hatta bağlayarak günlük operasyonu netleştirir.',
    tone: 'tile-peach',
  },
  {
    title: 'Teknoloji kaldıraçı',
    text: 'Dashboard, yazılım ve yapay zekayı amaç değil; doğru sistemin üzerinde çalışan araç olarak konumlandırır.',
    tone: 'tile-rose',
  },
];

const PRINCIPLES = [
  'Örüntü yayınlanır, vaka yayınlanmaz.',
  'Yazılım araçtır; yönetim sistemi amaçtır.',
  'KPI ölçmek için değil, davranış değiştirmek için yazılır.',
  'Saha dili, akademik vitrine tercih edilir.',
  'Doğru iş doğru markaya yönlendirilir.',
];

const EXPERTISE = [
  '+20 yıl İnsan Kaynakları deneyimi',
  'Yönetim ve organizasyon uzmanlığı',
  'Aile şirketleri yönetimi',
  'Kuşak yönetimi',
  'AI & BI teknolojileri uzmanlığı',
  'Microsoft partnerliği',
];

const EDUCATION = [
  'İşletme Fakültesi',
  'Yönetim ve organizasyon yüksek lisans',
  'Koç Üniversitesi MBA programı',
  'ICF bireysel koçluk',
  'ICF takım koçluğu',
];

const BRANDS = [
  {
    title: 'TomorrowHR',
    kicker: 'İK danışmanlığı ve dijital ürünler',
    text: 'Kurucusu olduğu ana marka: İK danışmanlığı, eğitim ve AI destekli dijital İK çözümleri tek çatıda.',
    href: 'https://tomorrowhr.com',
    tone: 'tile-ink',
  },
  {
    title: 'Tomorrow Digital',
    kicker: 'Yönetim sistemi ve uygulama',
    text: 'KOBİ ve aile şirketleri için süreç, KPI, dashboard ve AI destekli teslimat katmanı.',
    href: 'https://tomorrowdigital.com.tr',
    tone: 'tile-peach',
  },
  {
    title: 'TARİF',
    kicker: 'Dikey SaaS',
    text: 'Gıda üreticileri için reçete, üretim, stok ve izlenebilirlik odağı.',
    href: 'https://tarif.co',
    tone: 'tile-rose',
  },
];

const TOMORROWHR_PRODUCTS = [
  {
    name: 'T-Insight',
    text: 'İK analitik paneli — organizasyon verisini karar diline çevirir.',
  },
  {
    name: 'T-Reward',
    text: 'Ücret ve ödüllendirme analitiği — adil ve savunulabilir yapı.',
  },
  {
    name: 'T-Force',
    text: 'İş gücü verimlilik analitiği — kapasite ve planlama görünürlüğü.',
  },
  {
    name: 'TFlex™',
    text: 'Modüler İK platformu — ihtiyaca göre birleşen esnek çözümler.',
  },
  {
    name: 'Check-Up',
    text: 'Kurumsal İK teşhisi — yapı, süreç ve uyum fotoğrafı.',
  },
  {
    name: '5D Impact™',
    text: 'Danışmanlıktan dijitalleşmeye uzanan dönüşüm yol haritası.',
  },
];

export default function HakkindaPage() {
  return (
    <div className="container-page">
      <JsonLd
        id="hakkinda-webpage-json-ld"
        data={webPageJsonLd({
          title: 'Hakkında',
          description:
            'Aykut Karaca hakkında: KOBİ ve aile şirketleri için karar, KPI, süreç, rol, dashboard ve yönetim ritmi kuran stratejik operatör.',
          path: '/hakkinda',
        })}
      />
      <JsonLd
        id="hakkinda-breadcrumb-json-ld"
        data={breadcrumbJsonLd([
          { name: 'Ana sayfa', path: '/' },
          { name: 'Hakkında', path: '/hakkinda' },
        ])}
      />
      <header className="grid gap-[var(--space-4xl)] py-[var(--space-4xl)] md:min-h-[760px] md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-[96px]">
        <div>
          <p className="eyebrow">Hakkında</p>
          <h1 className="mt-[var(--space-lg)] max-w-[920px] font-sans text-[58px] font-medium leading-[1.02] tracking-[0] md:text-[112px]">
            Sahada çalışan sistem kuran kişi.
          </h1>
          <p className="mt-[var(--space-2xl)] max-w-[760px] font-sans text-[20px] leading-[1.6] text-[var(--color-warm-gray)] md:text-[24px]">
            Aykut Karaca; Türk KOBİ ve aile şirketleri için karar, rol, KPI,
            süreç, dashboard ve yönetim ritmi kuran stratejik operatördür.
            TomorrowHR&apos;ın kurucusudur: 20 yılı aşkın İK ve organizasyon
            deneyimini, AI destekli dijital ürünlere çevirir.
          </p>
          <div className="mt-[var(--space-2xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
            <Link
              href="/yontem"
              className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
            >
              Yöntemi gör
            </Link>
            <Link
              href="/manifesto"
              className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)] shadow-[0_14px_30px_rgba(0,0,0,0.055)]"
            >
              Manifestoyu oku
            </Link>
          </div>
        </div>

        <figure className="relative">
          <div className="absolute -inset-5 rounded-[46px] bg-[radial-gradient(circle_at_76%_12%,rgba(255,224,207,0.98),rgba(255,255,255,0)_44%)] blur-xl" />
          <div className="surface-raised relative overflow-hidden rounded-[38px] bg-[var(--color-cream)] p-[10px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[var(--color-cream-soft)]">
              <Image
                src="/images/portraits/aykut-karaca-portrait-01.jpg"
                alt="Aykut Karaca portre fotoğrafı"
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="relative mt-[var(--space-md)] flex flex-wrap gap-[var(--space-sm)]">
            <span className="mini-pill">KOBİ</span>
            <span className="mini-pill">Aile şirketi</span>
            <span className="mini-pill">KPI</span>
            <span className="mini-pill">Ritim</span>
          </figcaption>
          <div className="relative mt-[var(--space-lg)] grid grid-cols-2 gap-[var(--space-xl)] rounded-[24px] border border-[rgba(11,11,11,0.07)] bg-[rgba(255,255,255,0.6)] p-[var(--space-lg)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <div>
              <p className="eyebrow text-[11px] text-[var(--color-warm-gray)]">
                Uzmanlık
              </p>
              <ul className="mt-[var(--space-sm)] flex flex-col gap-[7px]">
                {EXPERTISE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[8px] font-sans text-[12.5px] leading-[1.4] text-[var(--color-charcoal)]"
                  >
                    <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-cat-terra)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l border-[var(--color-border)] pl-[var(--space-xl)]">
              <p className="eyebrow text-[11px] text-[var(--color-warm-gray)]">
                Eğitim
              </p>
              <ul className="mt-[var(--space-sm)] flex flex-col gap-[7px]">
                {EDUCATION.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[8px] font-sans text-[12.5px] leading-[1.4] text-[var(--color-charcoal)]"
                  >
                    <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-cat-ink)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </figure>
      </header>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-3">
        {FOCUS_AREAS.map((area) => (
          <article
            key={area.title}
            className={`brand-tile brand-tile-compact ${area.tone} min-h-[360px]`}
          >
            <div>
              <p className="eyebrow">Odak</p>
              <h2 className="mt-[var(--space-lg)] font-sans text-[40px] font-medium leading-[1.04] md:text-[58px]">
                {area.title}
              </h2>
            </div>
            <p className="mt-[var(--space-xl)] font-sans text-[18px] leading-[1.58] text-[var(--color-warm-gray)]">
              {area.text}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-[var(--space-4xl)] py-[120px] md:grid-cols-[0.78fr_1.22fr]">
        <aside className="md:sticky md:top-[140px] md:self-start">
          <p className="eyebrow">Neden bu site?</p>
          <h2 className="mt-[var(--space-lg)] max-w-[460px] font-sans text-[40px] font-medium leading-[1.06] md:text-[64px]">
            Danışmanlık vitrini değil. Düşünce merkezi.
          </h2>
        </aside>

        <div className="grid gap-[var(--space-3xl)]">
          <section className="border-b border-[var(--color-border)] pb-[var(--space-3xl)]">
            <h3 className="max-w-[780px] font-sans text-[34px] font-medium leading-[1.08] md:text-[54px]">
              Çünkü büyüyen şirketlerin sorunu çoğu zaman yeni araç eksikliği değildir.
            </h3>
            <p className="mt-[var(--space-xl)] max-w-[760px] font-sans text-[18px] leading-[1.75] text-[var(--color-warm-gray)] md:text-[20px]">
              Bir şirket büyüdükçe kararların kime ait olduğu, hangi KPI’ın
              hangi davranışı değiştireceği, sürecin nerede başlayıp nerede
              biteceği ve yöneticilerin hangi ritimde buluşacağı daha kritik hale gelir.
            </p>
          </section>

          <section className="border-b border-[var(--color-border)] pb-[var(--space-3xl)]">
            <h3 className="max-w-[780px] font-sans text-[34px] font-medium leading-[1.08] md:text-[54px]">
              Aykutkaraca.com bu yüzden işi satmadan önce düşünceyi netleştirir.
            </h3>
            <p className="mt-[var(--space-xl)] max-w-[760px] font-sans text-[18px] leading-[1.75] text-[var(--color-warm-gray)] md:text-[20px]">
              Burada amaç müşteri vakası sergilemek ya da hızlı başarı hikayesi
              üretmek değildir. Amaç, sahada tekrar eden yönetim örüntülerini
              anlaşılır bir dile çevirmektir.
            </p>
          </section>

          <section>
            <h3 className="max-w-[780px] font-sans text-[34px] font-medium leading-[1.08] md:text-[54px]">
              Doğru iş, doğru markaya yönlendirilir.
            </h3>
            <p className="mt-[var(--space-xl)] max-w-[760px] font-sans text-[18px] leading-[1.75] text-[var(--color-warm-gray)] md:text-[20px]">
              Düşünce burada başlar; uygulama ihtiyacına göre Tomorrow Digital,
              TARİF veya TomorrowHR hattına bağlanır. Kişisel site, marka mimarisinin
              karar merkezi gibi çalışır.
            </p>
          </section>
        </div>
      </section>

      <section className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-[1fr_1fr]">
        <div className="brand-tile brand-tile-compact tile-ink rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div>
            <p className="font-sans text-[13px] font-medium text-[rgba(255,255,255,0.66)]">
              Çalışma dili
            </p>
            <h2 className="mt-[var(--space-lg)] font-sans text-[44px] font-medium leading-[1.02] text-[var(--color-cream)] md:text-[78px]">
              Saha romantize edilmez. Sistemleştirilir.
            </h2>
          </div>
          <p className="mt-[var(--space-xl)] max-w-[560px] font-sans text-[19px] leading-[1.62] text-[rgba(255,255,255,0.66)]">
            İyi yönetim; doğru toplantı, doğru karar hakkı, doğru ölçü ve doğru
            takip ritmiyle gündelik hayatın içine girer.
          </p>
        </div>

        <div className="surface-raised rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <p className="eyebrow">İlkeler</p>
          <ol className="mt-[var(--space-2xl)] grid gap-[var(--space-md)]">
            {PRINCIPLES.map((principle, index) => (
              <li
                key={principle}
                className="grid grid-cols-[38px_1fr] gap-[var(--space-md)] rounded-[24px] bg-[var(--color-surface)] p-[var(--space-lg)] shadow-[inset_0_0_0_1px_rgba(11,11,11,0.05)]"
              >
                <span className="font-sans text-[12px] font-medium text-[var(--color-light-gray)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-[18px] font-medium leading-[1.35]">
                  {principle}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-[96px]">
        <div className="grid gap-[var(--space-3xl)] md:grid-cols-[0.85fr_1.15fr]">
          <div className="md:sticky md:top-[140px] md:self-start">
            <p className="eyebrow">
              tomorrow<b className="font-semibold text-[var(--color-teal-deep)]">HR</b>
            </p>
            <h2 className="mt-[var(--space-lg)] max-w-[460px] font-sans text-[40px] font-medium leading-[1.06] md:text-[64px]">
              Danışmanlık, ürünle tamamlanır.
            </h2>
            <p className="mt-[var(--space-xl)] max-w-[480px] font-sans text-[18px] leading-[1.7] text-[var(--color-warm-gray)]">
              TomorrowHR; İK danışmanlığı, eğitim ve dijital çözümleri tek
              çatıda toplar. Hazır reçete yerine dinleyerek başlar; 5D
              Impact&trade; yol haritasıyla teşhisten davranış dönüşümüne
              ilerler. İhtiyaç netleştiğinde aynı know-how, çalışan dijital
              ürüne dönüşür.
            </p>
            <a
              href="https://tomorrowhr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[var(--space-xl)] inline-flex justify-center rounded-full border border-[var(--color-teal-deep)] bg-[var(--color-teal-deep)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(11,125,114,0.25)]"
            >
              tomorrowhr.com&apos;u incele
            </a>
          </div>
          <div className="grid gap-[var(--space-md)] sm:grid-cols-2">
            {TOMORROWHR_PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="surface-raised rounded-[24px] p-[var(--space-lg)]"
              >
                <p className="font-sans text-[17px] font-semibold text-[var(--color-charcoal)]">
                  {product.name}
                </p>
                <p className="mt-[var(--space-sm)] font-sans text-[14.5px] leading-[1.55] text-[var(--color-warm-gray)]">
                  {product.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="max-w-[820px]">
          <p className="eyebrow">Marka mimarisi</p>
          <h2 className="mt-[var(--space-lg)] font-sans text-[42px] font-medium leading-[1.04] md:text-[72px]">
            Kişisel düşünce, doğru işe köprü olur.
          </h2>
        </div>
        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-xl)] md:grid-cols-3">
          {BRANDS.map((brand) => (
            <a
              key={brand.title}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`brand-tile ${brand.tone} lift-link`}
            >
              <div>
                <p className="font-sans text-[13px] font-medium tile-muted">
                  {brand.kicker}
                </p>
                <h3 className="mt-[var(--space-lg)] font-sans text-[42px] font-medium leading-[0.98] md:text-[54px]">
                  {brand.title}
                </h3>
                <p className="mt-[var(--space-lg)] max-w-[360px] font-sans text-[17px] leading-[1.5] tile-muted">
                  {brand.text}
                </p>
              </div>
              <span className="tile-cta">Git</span>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-[var(--space-4xl)] pt-[96px]">
        <div className="surface-muted rounded-[42px] p-[var(--space-xl)] md:p-[var(--space-3xl)]">
          <div className="grid gap-[var(--space-3xl)] md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="eyebrow">Devam</p>
              <h2 className="mt-[var(--space-lg)] max-w-[820px] font-sans text-[42px] font-medium leading-[1.04] md:text-[72px]">
                Önce yaklaşımı oku, sonra doğru yolu seç.
              </h2>
            </div>
            <div>
              <p className="max-w-[560px] font-sans text-[18px] leading-[1.65] text-[var(--color-warm-gray)]">
                Eğer burada anlatılan meseleler şirketine tanıdık geliyorsa,
                bir sonraki en iyi adım yöntemi ve doğru yer sayfasını incelemek.
              </p>
              <div className="mt-[var(--space-xl)] flex flex-col gap-[var(--space-md)] sm:flex-row">
                <Link
                  href="/yontem"
                  className="inline-flex justify-center rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-cream)] shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
                >
                  Yöntemi incele
                </Link>
                <Link
                  href="/dogru-yer-mi"
                  className="inline-flex justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-high)] px-[var(--space-xl)] py-[14px] font-sans text-[15px] font-medium text-[var(--color-charcoal)]"
                >
                  Doğru yer mi?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
