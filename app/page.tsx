import AboutPreview from '@/components/AboutPreview';
import BridgeCards from '@/components/BridgeCards';
import ContentPillars from '@/components/ContentPillars';
import DogruYerCTA from '@/components/DogruYerCTA';
import JsonLd from '@/components/JsonLd';
import ManifestHero from '@/components/ManifestHero';
import ProblemBlock from '@/components/ProblemBlock';
import RecentEssays from '@/components/RecentEssays';
import SahaPreview from '@/components/SahaPreview';
import YontemPreview from '@/components/YontemPreview';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';
import { webPageJsonLd } from '@/lib/structured-data';

export default function HomePage() {
  return (
    <div className="container-page">
      <JsonLd
        id="home-webpage-json-ld"
        data={webPageJsonLd({
          title: `${SITE_NAME} — Stratejik Düşünce Merkezi`,
          description: SITE_TAGLINE,
          path: '/',
        })}
      />
      <ManifestHero />
      <ContentPillars />
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
