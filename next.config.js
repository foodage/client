/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  distDir: '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./base/_fonts.scss"; @import "./base/_mixins.scss"; @import "./constants/_breakpoint.scss"; @import "./constants/_colors.scss"; @import "./constants/_radius.scss"; @import "./constants/_typography.scss"; `,
  },
  trailingSlash: false,
  swcMinify: true,
  images: {},
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
