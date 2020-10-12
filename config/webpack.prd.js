/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: ['core-js', './src/index.js'],
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'), // 得是绝对路径
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
    new CleanWebpackPlugin(),
    // HtmlWebpackPlugin默认使用ejs loader . 支持lodash template语法
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      GOOD: JSON.stringify('//good-oss.oss-cn-shanghai.aliyuncs.com'),
    }),
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
          MiniCssExtractPlugin.loader,
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
