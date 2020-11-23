const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../..', './src/index.html'),
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../..', `./.env.prod`),
    }),
  ],
  devtool: 'source-map',
};
