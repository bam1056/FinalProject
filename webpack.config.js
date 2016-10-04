'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const ROOT_PATH = path.resolve(__dirname)
const SOURCE_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
  entry: [
    'whatwg-fetch',
    SOURCE_PATH
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SOURCE_PATH, 'index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new DashboardPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [SOURCE_PATH],
      loader: 'babel'
    }, {
      test: /\.(sass|scss)$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'file'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(otf|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }]
  }
}
