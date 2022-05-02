const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "assets/"),
    },
    port: 3000,
    devMiddleware: {
      publicPath: "/",
    },
  },
});
