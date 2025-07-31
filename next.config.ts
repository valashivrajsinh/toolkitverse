import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yourdomain.com', // Replace with your actual domain
      },
    ],
  },
};

export default nextConfig;
