import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          background: '#0B0B0B',
          color: '#FFFFFF',
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '-0.02em',
        }}
      >
        AK
      </div>
    ),
    size,
  );
}
