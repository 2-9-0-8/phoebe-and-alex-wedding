/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    formats: ['image/webp', 'image/avif'],
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig