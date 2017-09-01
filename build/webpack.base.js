const path = require('path');
const webpack = require('webpack');
const constants = require('./constants.js');

// plugs
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [constants.client, 'index.js'].join('/'),
    random: [constants.client, 'random.js'].join('/')
  },
  output: {
    filename: '[name].bundle.js',
    path: constants.dist
  },
  
  // modules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // plugins
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
}

