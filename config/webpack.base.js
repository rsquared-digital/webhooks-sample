const constants = require('../constants.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname));

module.exports = {
  entry: {
    app: '../client/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/public')
  }
};

