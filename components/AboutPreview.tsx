import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="rhythm-md border-t border-[var(--color-border)]">
      <p className="eyebrow">Hakkında</p>
      <div className="mt-[var(--space-3xl)] grid gap-[var(--space-4xl)] md:grid-cols-[1fr_1.4fr] md:items-end">
        <figure className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
          <Image
            src="/images/portraits/aykut-karaca-portrait-01.jpg"
            alt="Aykut Karaca portre fotoğrafı"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover grayscale"
          />
        </figure>
        <div>
          <h2 className="max-w-[20ch] text-display text-[var(--color-charcoal)]">
            Entelektüel danışman değil. Sahada çalışan sistem kuran kişi.
          </h2>
          <p className="mt-[var(--space-2xl)] max-w-[58ch] text-deck text-[var(--color-warm-gray)]">
            Aykut Karaca, kurucu sezgisini şirketin ortak yönetim diline
            çevirir. Kararların kime ait olduğunu, KPI&apos;ların neyi
            değiştireceğini ve yazılımın hangi yönetim ritmine hizmet edeceğini
            netleştirir.
          </p>
          <Link
            href="/hakkinda"
            className="lift-link mt-[var(--space-3xl)] inline-flex items-center border-b border-[var(--color-ink)] pb-[2px] font-sans text-[14px] font-medium text-[var(--color-charcoal)]"
          >
            Hikayeyi gör
          </Link>
        </div>
      </div>
    </section>
  );
}
