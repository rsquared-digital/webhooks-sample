const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client/index.js',
    random: './src/client/random.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
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
    new CleanWebpackPlugin(['dist']),
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