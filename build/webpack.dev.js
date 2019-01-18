const merge = require('webpack-merge')
const common = require('./webpack.base.config')
const webpack = require('webpack')
const DefinePlugin = require('webpack/lib/DefinePlugin')

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})