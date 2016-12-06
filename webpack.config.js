var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    'vendors':['angular','angular-ui-router'],
    'app': './src/index.js'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel-loader',
        exclude: /node_modules/      
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(css|html)$/,
        loader: 'raw'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=10000'
      }
    ]
  },

  plugins: [
    new ngAnnotatePlugin({
      add: true
      // other ng-annotate options here 
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
  target: 'electron-renderer'
};
