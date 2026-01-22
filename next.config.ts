/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // ⬅️ disable for dev speed
  trailingSlash: false,

  eslint: {
    ignoreDuringBuilds: true, // ⬅️ lint separately
  },

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
