const webpack = require("webpack");
const withCSS = require("@zeit/next-css");
const merge = require("webpack-merge");

module.exports = withCSS({
  webpack(config, options) {
    return merge(config, {
      plugins: [
        // https://github.com/graphql/graphiql/issues/882
        new webpack.ContextReplacementPlugin(
          /graphql-language-service-interface[\\/]dist$/,
          new RegExp(`^\\./.*\\.js$`)
        ),
      ],
    });
  },
});
