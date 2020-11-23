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
  },
  devtool: 'eval-source-map',
};
