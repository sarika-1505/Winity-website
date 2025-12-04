/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "winity.life",
      },
    ],
  },
};

export default nextConfig;
