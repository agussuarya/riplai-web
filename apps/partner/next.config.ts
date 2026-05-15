import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: [
    "@riplai/ui",
    "@riplai/api-client",
    "@riplai/types",
    "@riplai/utils",
    "@riplai/config",
  ],
};

export default config;
