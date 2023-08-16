/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'user-images.githubusercontent.com'],
  },
};

module.exports = nextConfig;
