/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  eslint: {
    // This will allow building even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
