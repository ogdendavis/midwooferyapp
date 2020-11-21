const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true,
  },
  devtool: 'eval-source-map',
};
