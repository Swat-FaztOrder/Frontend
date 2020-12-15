//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

//css rules
const cssRules = {
  test: /\.styl$/i,
  use: ['style-loader', 'css-loader', 'stylus-loader'],
  exclude: /node_modules/,
};

//images rules
const imgRules = {
  test: /\.(jpg|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 90000,
    },
  },
};

//babel rules
const babelRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

//export config
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[contentHash].js',
  },
  module: {
    rules: [babelRules, cssRules, imgRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'FastOrder',
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public/locales', to: './locales' }]
    }),
    new Dotenv(),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png',
      favicon: {
        appName: 'FastOrder',
      },
    }),
  ],
};
