import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['toolkitverse.com'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
