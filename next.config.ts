// this file is used to configure NextJs features

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
