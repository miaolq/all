const path = require('path')
const process = require('process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
  mode: 'production',
}

if (process.env.NODE_ENV === 'development') {
  config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
  }
}
module.exports = {
  ...config,
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'), // 得是绝对路径
    // publicPath: "/",  // 资源的url的前缀默认是当前目录
  },
  optimization: {
    // 代码分割
    // splitChunks: {
    //   chunks: "all",
    // },
    runtimeChunk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // HtmlWebpackPlugin默认使用ejs loader . 支持lodash template语法
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // node_modules 不编译
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
}
