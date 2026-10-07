/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Keep Vercel Image Optimization usage low (Hobby quota): one format,
    // one quality, fewer widths and a 31-day cache.
    formats: ['image/webp'],
    qualities: [75],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 2678400,
  },
}

module.exports = nextConfig
