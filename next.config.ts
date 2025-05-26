import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
    // Warning: only do this if you understand the risks!
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
