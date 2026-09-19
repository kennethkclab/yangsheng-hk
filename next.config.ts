import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "yangsheng.hk" },
      { protocol: "https", hostname: "yangshengdao.hk" },
      { protocol: "https", hostname: "pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
