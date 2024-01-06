/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reks-manager.fra1.digitaloceanspaces.com",
      },
    ],
  },
};

module.exports = nextConfig;
