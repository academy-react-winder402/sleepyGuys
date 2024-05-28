/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: "classapi.sepehracademy.ir",
      },
    ],
  },
};

export default nextConfig;
