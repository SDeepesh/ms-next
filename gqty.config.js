require('dotenv-flow').config();

/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: false,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}`,
    headers: {},
  },
  destination: './src/client/index.js',
  subscriptions: false,
  javascriptOutput: true,
};

console.log(`Using "${config.introspection.endpoint}" to generate schema...`);

module.exports = config;
