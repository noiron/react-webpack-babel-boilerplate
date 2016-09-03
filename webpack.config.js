var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
  ],
  devServer: {
    stats: 'errors-only'
  }
}