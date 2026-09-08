import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yangsheng.hk",
      },
      {
        protocol: "https",
        hostname: "pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev",
      },
    ],
  },
};

export default nextConfig;
