/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['file.notion.so', 'user-images.githubusercontent.com'],
  },
};

module.exports = nextConfig;
