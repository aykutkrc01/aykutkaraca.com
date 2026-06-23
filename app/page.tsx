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
      <div className="grid gap-[var(--space-xl)] py-[96px] md:grid-cols-2">
        <RecentEssays />
        <SahaPreview />
      </div>
      <AboutPreview />
      <BridgeCards />
      <DogruYerCTA />
    </div>
  );
}
