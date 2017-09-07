const constants = require('../constants.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname));

module.exports = {
  entry: {
    app: [constants.client, 'index.js'].join('/')
  },
  output: {
    filename: '[name].bundle.js',
    path: constants.public,
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
      template: [constants.client, 'index.ejs'].join('/')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
};

