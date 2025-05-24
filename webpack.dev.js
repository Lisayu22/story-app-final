const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // devServer: {
  //   static: path.resolve(__dirname, "dist"),
  //   port: 9000,
  //   client: {
  //     overlay: {
  //       errors: true,
  //       warnings: true,
  //     },
  //   },
  // },
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
});
