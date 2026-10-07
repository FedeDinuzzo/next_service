/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cache optimized images for 31 days (Next 16 default is 4h) so they stop
    // re-transforming every few hours and eating the Hobby quota. Sizes and
    // formats stay at the defaults so already-cached variants keep matching.
    minimumCacheTTL: 2678400,
  },
}

module.exports = nextConfig
