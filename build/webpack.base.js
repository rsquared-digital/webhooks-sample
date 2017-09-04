const path = require('path');
const webpack = require('webpack');
const constants = require('./constants.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let clientConfig = {
  entry: {
    app: [constants.client, 'index.js'].join('/')
  },
  output: {
    filename: '[name].bundle.js',
    path: constants.dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Generated',
      template: './src/client/index.ejs'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
};


var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

let serverConfig = {
  entry: {
    server: [constants.server, 'server.js'].join('/')
  },
  output: {
    filename: '[name].js',
    path: constants.dist
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: nodeModules
};

module.exports = {clientConfig, serverConfig};

