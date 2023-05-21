/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', `${process.env.IP_ADDRESS}`],
  },
}

module.exports = nextConfig
