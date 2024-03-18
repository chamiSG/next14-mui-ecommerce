/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    // Add support for importing SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    })
    return config
  },
  images: {
    domains: [
      'cdn.dummyjson.com',
    ],
  },
}

module.exports = nextConfig
