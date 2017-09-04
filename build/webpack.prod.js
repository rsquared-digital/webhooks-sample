const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const constants = require('./constants.js');

//plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

let pluginOpts = {
  comments: false
};

module.exports = [
  merge(base.clientConfig, {
    plugins: [
      new CleanWebpackPlugin(['dist'], { root: constants.root }),
      //new MinifyPlugin({}, pluginOpts)
    ]
  }),
  merge(base.serverConfig, {
    plugins: [
      //new MinifyPlugin({}, pluginOpts)
    ]
  })
];