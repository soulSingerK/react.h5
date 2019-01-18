const path = require('path')
const webpack = require('webpack')

const config = path.resolve(process.cwd(), 'config')
const env = process.env.NODE_ENV == 'production' ? 'production' : 'development'


module.exports = {
  mode: env,
  entry: {
    vendor: [path.resolve(config, 'vendor.js')]
  },
  output: {
    path: path.join(config, 'js', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
    libraryTarget: 'this'
  },
  plugins: [
    new webpack.DllPlugin({
      context: process.cwd(),
      path: path.join(config, 'js', 'dll', '[name]-mainfest.json'),
      name: '[name]_[hash]'
    })
  ]
}