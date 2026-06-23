import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F5F5F7',
          color: '#0B0B0B',
          padding: 64,
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          <span>{SITE_NAME}</span>
          <span style={{ color: '#6E6E73', fontSize: 24 }}>
            Stratejik Düşünce Merkezi
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 999,
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.96), rgba(229,229,226,0.72))',
              boxShadow:
                '0 24px 80px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(11,11,11,0.08)',
            }}
          />
          <h1
            style={{
              maxWidth: 960,
              margin: 0,
              fontSize: 86,
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}
          >
            {SITE_TAGLINE}
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#6E6E73',
            fontSize: 28,
          }}
        >
          <span>Karar, rol, KPI ve yönetim ritmi.</span>
          <span>aykutkaraca.com</span>
        </div>
      </div>
    ),
    size,
  );
}
