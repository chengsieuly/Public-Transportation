const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers/root.helper');

// Webpack Plugins
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  devtool: 'eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    contentBase: helpers.root('dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    watch: true,
    stats: 'minimal',
    host: process.env.HOST,
    port: process.env.PORT
  },

  plugins: [
    new HotModuleReplacementPlugin()
  ]
});
