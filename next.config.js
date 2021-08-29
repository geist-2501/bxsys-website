const withMdx = require("@next/mdx")({
  extension: /\.mdx$/
});

module.exports = withMdx({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx']
});
