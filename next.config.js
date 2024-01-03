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
    prependData: `@import "./common/_mixins.scss"; @import "./common/_variables.scss"; @import "./common/_fonts.scss";`,
  },
  trailingSlash: false,
  swcMinify: true,
  images: {},
};

module.exports = nextConfig;
