const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers/root.helper');

// Webpack Plugins
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

// Other Plugins
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  debut: false,

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new DedupePlugin(),
    new NoErrorsPlugin(),
    new OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
