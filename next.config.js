const redirects = require('./utils/data/redirects');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/',
          destination: '/homepage',
        },
        {
          source: '/templates',
          destination: '/templates-rewrite',
        },
        {
          source: '/:type/templates',
          destination: '/templates-rewrite',
        },
        {
          source: '/faq',
          destination: '/faqs',
        },
        {
          source: '/tools',
          destination: '/tools-rewrite',
        },
        {
          source: '/case-types',
          destination: '/guides',
        },
        {
          source: '/fees',
          destination: '/fees',
        },
      ],
    };
  },
  async redirects() {
    return redirects;
  },
};
