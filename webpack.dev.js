const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/client/views/index.html',
      filename: 'index.html'
    })
  ]
}