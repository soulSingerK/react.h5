const webpack = require('webpack')
const merge = require('webpack-merge')
const DefinePlugin = require('webpack/lib/DefinePlugin')

const common = require('./webpack.base.config')

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('production')
      }
    })
  ]
})