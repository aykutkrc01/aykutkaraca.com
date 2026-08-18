/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Kaldırılan sayfalar: arama motorlarında kayıtlı linkler ana sayfaya döner
  async redirects() {
    return [
      '/manifesto',
      '/yazilar',
      '/yazilar/:path*',
      '/yontem',
      '/hakkinda',
      '/dogru-yer-mi',
      '/rss.xml',
    ].map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
