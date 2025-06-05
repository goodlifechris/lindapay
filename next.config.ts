// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  experimental: {
    // Required for Turbopack if you're using it
    // appDir: true,
    // Enables CSS support in import statements
    // css: true,
  },
  // Configure Webpack to handle SVG and other assets
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Enable source maps in production (optional)
  productionBrowserSourceMaps: true,
};

export default nextConfig;