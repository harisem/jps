/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nos.jkt-1.neo.id',
        port: '',
        // pathname: '/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
