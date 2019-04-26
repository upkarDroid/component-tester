const webpack = require('webpack');
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      sauce: path.resolve("./src"),
      ZColors: path.resolve(__dirname, "./src/tokens/color"),
      WebUiKIt: path.resolve(__dirname),
      Components: path.resolve(__dirname, "./src/Components"),
      tokens: path.resolve("./src/tokens")
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};