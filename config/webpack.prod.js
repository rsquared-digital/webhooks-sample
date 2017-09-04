const constants = require('../constants.js');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

let pluginOpts = {
  comments: false
};

module.exports = merge(base.clientConfig, {
  plugins: [
  ]
})