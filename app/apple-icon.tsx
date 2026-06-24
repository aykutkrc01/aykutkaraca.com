import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 42,
          background: '#0B0B0B',
          color: '#FFFFFF',
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: 66,
          fontWeight: 600,
          letterSpacing: '-0.04em',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)',
        }}
      >
        AK
      </div>
    ),
    size,
  );
}
