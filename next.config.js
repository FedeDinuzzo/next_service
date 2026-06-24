/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.service-electrolux.ar",
          },
        ],
        destination: "https://service-electrolux.ar/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
