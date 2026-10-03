import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Insight cover images and diagrams are served from Sanity's CDN.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
