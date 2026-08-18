import ChaosHero from '@/components/ChaosHero';
import JsonLd from '@/components/JsonLd';
import WhatsAppFab from '@/components/WhatsAppFab';
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
      <ChaosHero />
      <WhatsAppFab />
    </div>
  );
}
