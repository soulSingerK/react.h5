const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

// const isDev = 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist')
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
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[hash:7].[ext]',
            limit: 8192,
            outputPath: 'font'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:7].[ext]',
            outputPath: 'img'
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}