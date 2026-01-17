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
            value: "www.servicedrean.ar",
          },
        ],
        destination: "https://servicedrean.ar/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
