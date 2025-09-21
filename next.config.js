/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 90, 95, 100],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
