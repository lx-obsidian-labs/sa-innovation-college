import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    unoptimized: true,
  },
  // Disable ESLint during build for CI
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during build for CI
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
