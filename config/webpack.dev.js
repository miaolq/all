/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    hotOnly: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true, // 返回根目录，防止404
    contentBasePublicPath: 'all',
    // public: '192.168.23.41',
  },
  entry: {
    app: ['core-js', './src/index.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'), // 得是绝对路径
    // publicPath: 'all/',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
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
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "${path.resolve(__dirname, '../src/style/_var.scss')}";`,
            },
          },
        ],
      },
      {
        test: /\.(jpeg|png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
            },
          },
        ],
      },
    ],
  },
}
