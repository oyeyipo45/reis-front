/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reisetopia.leonardocontentcloud.com",
      },
    ],
  },
};

export default nextConfig;
