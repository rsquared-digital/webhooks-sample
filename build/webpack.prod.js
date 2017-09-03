const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const constants = require('./constants.js');

//plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  merge(base.clientConfig, {
    plugins: [
      new CleanWebpackPlugin(['dist'], { root: constants.root }),
    ]
  }),
  base.serverConfig
];