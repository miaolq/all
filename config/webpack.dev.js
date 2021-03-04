/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const projectDir = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3332,
    hot: true,
    hotOnly: true,
    historyApiFallback: true, // 返回根目录，防止404
    publicPath: '/',
    // public: '192.168.23.41',
    // contentBase: path.join(__dirname, 'dist'),
    // contentBasePublicPath: 'all',
  },
  entry: {
    // app: ['core-js', './step/didact.js'],
    app: ['core-js', './src/index.js'],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(projectDir, 'dist'), // 得是绝对路径
    publicPath: '/', // 尽量与devServer的publicPath对应，否则三层路径有问题
  },
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
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
    new webpack.ProvidePlugin({
      U: [path.resolve(__dirname, '../src/util/index.js'), 'default'],
    }),
    // HtmlWebpackPlugin默认使用ejs loader . 支持lodash template语法
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new webpack.DefinePlugin({
      GOOD: JSON.stringify('//good-oss.oss-cn-shanghai.aliyuncs.com'),
      AUTO_ROUTE: '<Route path="/ar/app" component={App} />',
      // webpack.DefinePlugin.runtimeValue(() => {
      //   return `<Route path="/ar/app" component={App} />`
      // }, []),
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
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "${path.resolve(projectDir, 'src/style/_var.scss')}";`,
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
