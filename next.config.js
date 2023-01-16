/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "player.vimeo.com"],
    unoptimized: true,
  },
  
}

module.exports = nextConfig
