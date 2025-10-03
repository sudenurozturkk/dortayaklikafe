/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // GitHub Pages için gerekli
  },
  // GitHub Pages için static export - Vercel'de bu satır göz ardı edilir
  output: process.env.VERCEL ? undefined : 'export',
  // GitHub Pages base path
  basePath: process.env.VERCEL ? '' : '',
  // Trailing slash
  trailingSlash: true,
}

module.exports = nextConfig

