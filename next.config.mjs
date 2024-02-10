/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tickete.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
