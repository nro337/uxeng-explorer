/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ist.psu.edu'
      }
    ],
  },
};

module.exports = nextConfig;
