import type { NextConfig } from "next";

const config: NextConfig = {
  output: "standalone",
  transpilePackages: ["@riplai/ui", "@riplai/config"],
};

export default config;
