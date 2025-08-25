/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // since your images are local, leave domains empty
    domains: [],
    // enable future static imports optimization
    unoptimized: true,
  },
  // trailingSlash: false ensures URLs like /about, /contact (no ending /)
  trailingSlash: false,
  // optional: enable experimental features if you need them
  experimental: {
    appDir: true, // only if using /app directory in Next.js 13+
  },
  // redirects or rewrites can be added here if needed
  async redirects() {
    return [
      // Example: redirect old URLs if needed
      // { source: '/old-page', destination: '/new-page', permanent: true },
    ]
  },
}

module.exports = nextConfig
