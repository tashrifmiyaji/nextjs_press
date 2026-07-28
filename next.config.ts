import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images : {
    remotePatterns:[
      {
        hostname: "tse4.mm.bing.net"
      },
      {
        hostname: "example.com"
      }
    ]
  }
};

export default nextConfig;
