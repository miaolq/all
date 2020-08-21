const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // none 默认production
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // 得是绝对路径
    // publicPath: "/",  // 资源的url的前缀默认是当前目录
  },
  optimization: {
    // 代码分割
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "hello" }),
    new HtmlWebpackPlugin({ title: "hello", filename: "index2.html" }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // node_modules 不编译
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
