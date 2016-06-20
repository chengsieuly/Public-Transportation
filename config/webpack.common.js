const helpers = require('./helpers/root.helper');
const pkg = require('../package.json');

// Webpack Plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// Other Plugins
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': helpers.root('src'),
    'vendor': Object.keys(pkg.dependencies)
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: helpers.root('src') },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'], include: helpers.root('src') }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),

    new ExtractTextPlugin('[name].[hash].css'),

    new HtmlWebpackPlugin({
      template: helpers.root('src', 'index.ejs'),
      appMountId: 'app',
      inject: false
    })

  ]
}
