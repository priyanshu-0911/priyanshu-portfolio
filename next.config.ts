import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import("@opennextjs/cloudflare").then(
  (m) => m.initOpenNextCloudflareForDev()
);