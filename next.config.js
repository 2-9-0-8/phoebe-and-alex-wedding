/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig