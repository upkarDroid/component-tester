const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    // extensions: ["*", ".js", ".jsx"],
    // alias: {
    //   sauce: path.resolve("./src"),
    //   ZColors: path.resolve(__dirname, "./src/tokens/color"),
    //   WebUiKIt: path.resolve(__dirname),
    //   Components: path.resolve(__dirname, "./src/Components"),
    //   tokens: path.resolve("./src/tokens")
    // }
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./src/index.html"
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 8081
    })
  ],
  // optimization: {
  //   usedExports: true,
  //   splitChunks: {
  //     hidePathInfo: false,
  //     minSize: 1000,
  //     maxSize: 40000,
  //     maxAsyncRequests: Infinity,
  //     maxInitialRequests: 20
  //   }
  // },
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
