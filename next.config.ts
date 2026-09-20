import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "yangsheng.hk" },
      { protocol: "https", hostname: "yangshengdao.hk" },
      { protocol: "https", hostname: "pub-5442f85cdccf43b0aed63eadbd58fc4f.r2.dev" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
