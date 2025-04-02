import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  reactStrictMode: true, // Enable React Strict Mode

  images: {
    unoptimized: true,
    },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "encrypted-tbn0.gstatic.com",
  //       pathname: "/**", // Allow all images from this domain
  //     },
  //   ],
  // },
};

export default nextConfig;
