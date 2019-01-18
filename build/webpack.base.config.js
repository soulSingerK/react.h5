const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = path.resolve(process.cwd(), 'config')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

// const isDev = 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, './dist')
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      "api": resolve('src/api'),
      "container": resolve('src/container'),
      "common": resolve('src/common'),
      "components": resolve('src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(path.join(config, 'js', 'dll', 'vendor-mainfest.json'))
    }),
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}