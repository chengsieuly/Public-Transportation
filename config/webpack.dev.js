const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers/root.helper');

// Webpack Plugins
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  devtool: 'eval-source-map',

  entry: {
    'hot': [
      'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?cacheDirectory'], include: helpers.root('src') }
    ]
  },

  devServer: {
    contentBase: helpers.root('dist'),
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: false,
    progress: true,
    quiet: false,
    stats: 'minimal'
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ]
});
