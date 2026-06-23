import AboutPreview from '@/components/AboutPreview';
import BridgeCards from '@/components/BridgeCards';
import DogruYerCTA from '@/components/DogruYerCTA';
import ManifestHero from '@/components/ManifestHero';
import ProblemBlock from '@/components/ProblemBlock';
import RecentEssays from '@/components/RecentEssays';
import SahaPreview from '@/components/SahaPreview';
import YontemPreview from '@/components/YontemPreview';

export default function HomePage() {
  return (
    <div className="container-page">
      <ManifestHero />
      <ProblemBlock />
      <YontemPreview />
      <section className="rhythm-md grid gap-[var(--space-4xl)] border-t border-[var(--color-border)] md:grid-cols-2">
        <RecentEssays />
        <SahaPreview />
      </section>
      <AboutPreview />
      <BridgeCards />
      <DogruYerCTA />
    </div>
  );
}
