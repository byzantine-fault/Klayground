const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');
const path = require('path');
const customTheme = path.resolve('./styles/customTheme.less');

const WithLessOptions = {
  lessLoaderOptions: {
    lessOptions: {
      additionalData: (content) => `${content}\n\n@import '${customTheme}';`,
    },
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([[withLess, { WithLessOptions }]], nextConfig);
