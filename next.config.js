/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'imgix',
    domains: ['openweathermap.org'],
  },
}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
