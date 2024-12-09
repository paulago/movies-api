// For manipulating file and directory paths.
const path = require('path');
// Webpack plugin that generates an index.html file based on a template, and injects the resulting bundle.js automatically.
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    })
  ]
};
