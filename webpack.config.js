// For manipulating file and directory paths.
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
// Webpack plugin that generates an index.html file based on a template, and injects the resulting bundle.js automatically.
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config();

module.exports = {
  entry: './src/index.js', // Application entry point.
  output: {
    path: path.resolve(__dirname, 'dist'), // Physical directory where Webpack will place the packed files.
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true // If you try to directly access a path other than '/' (for example /movie/123), the dev server will not return a 404 and instead return index.html.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // To transpile ES6+ JS/JSX code into more browser-compatible code.
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({
        'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
      })
  ]
};
