const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../..', `./.env.dev`),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../..', './dist'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/dashboard/*': {
        target: 'http://localhost:8080/',
        pathRewrite: { '^/dashboard': '' },
      },
    },
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
  },
};
