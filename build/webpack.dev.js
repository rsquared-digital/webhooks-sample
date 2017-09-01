const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const constants = require('./constants.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: constants.dist
  }
});

