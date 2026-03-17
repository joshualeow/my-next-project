import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/product1',
        destination: '/product1/index.html',
      },
      {
        source: '/product1/',
        destination: '/product1/index.html',
      },
    ];
  },
};

export default nextConfig;
