import Image from 'next/image';
import Link from 'next/link';

export default function ManifestHero() {
  return (
    <section className="relative grid items-center gap-[var(--space-4xl)] py-[var(--space-4xl)] md:min-h-[720px] md:grid-cols-[1.34fr_0.66fr] md:py-[80px]">
      <div className="pointer-events-none absolute left-[-12%] top-[14%] h-[360px] w-[360px] rounded-full bg-[var(--color-surface)] opacity-80 blur-3xl" />
      <div className="relative">
        <h1 className="max-w-[920px] text-hero">
          Daha fazla yazılım değil. Şirkete uygun en doğru teknoloji ve iyi
          yönetilen şirketler.
        </h1>
        <p className="mt-[var(--space-2xl)] max-w-[680px] font-sans text-[21px] leading-[1.45] text-[var(--color-warm-gray)] md:text-[24px]">
          Türk KOBİ’leri, aile şirketleri ve büyüyen ekipler için yönetim
          sistemi, dijital dönüşüm ve operasyonel netlik üzerine bir düşünce
          merkezi. Yazılım araçtır; amaç daha iyi yönetilen şirkettir.
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
        <div className="relative mt-[var(--space-lg)] grid grid-cols-2 gap-[var(--space-xl)] rounded-[24px] border border-[rgba(11,11,11,0.07)] bg-[rgba(255,255,255,0.6)] p-[var(--space-lg)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <div>
            <p className="eyebrow text-[11px] text-[var(--color-warm-gray)]">
              Uzmanlık
            </p>
            <ul className="mt-[var(--space-sm)] flex flex-col gap-[7px]">
              {[
                '+20 yıl İnsan Kaynakları deneyimi',
                'Yönetim ve organizasyon uzmanlığı',
                'Aile şirketleri yönetimi',
                'Kuşak yönetimi',
                'AI & BI teknolojileri uzmanlığı',
                'Microsoft partnerliği',
              ].map((item) => (
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
              {[
                'İşletme Fakültesi',
                'Yönetim ve organizasyon yüksek lisans',
                'Koç Üniversitesi MBA programı',
                'ICF bireysel koçluk',
                'ICF takım koçluğu',
              ].map((item) => (
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
    </section>
  );
}
