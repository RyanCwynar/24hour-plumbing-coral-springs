import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/24hour-plumbing-coral-springs",
  assetPrefix: "/24hour-plumbing-coral-springs/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
