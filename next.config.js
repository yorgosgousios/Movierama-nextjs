/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.themoviedb.org",
      },
    ],
  },
};

module.exports = nextConfig;
