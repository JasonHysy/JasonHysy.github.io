import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /**
   * Run build workers as worker threads instead of child processes. Builds
   * behave identically, but nothing is spawned, which is required in
   * sandboxed environments that block child-process creation.
   */
  experimental: {
    workerThreads: true,
  },
};

export default nextConfig;
