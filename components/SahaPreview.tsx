export default function SahaPreview() {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-[var(--space-lg)]">
        <p className="eyebrow">Saha örüntüsü</p>
        <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-[var(--color-warm-gray)]">
          Kenar notu
        </span>
      </div>
      <blockquote className="mt-[var(--space-2xl)]">
        <p className="max-w-[18ch] font-serif text-[36px] font-light leading-[1.08] text-[var(--color-charcoal)] md:text-[48px]">
          Örüntü yayınlanır. Vaka yayınlanmaz.
        </p>
        <p className="mt-[var(--space-xl)] max-w-[52ch] text-deck text-[var(--color-warm-gray)]">
          Müşteri adı vermeden; sorun deseni, kurulan sistem ve o sistemden
          çıkan prensip anlatılır.
        </p>
      </blockquote>
    </section>
  );
}
