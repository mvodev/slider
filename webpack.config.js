const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const cssLoaders = extra => {
 const loaders = [{
  loader: MiniCssExtractPlugin.loader,
  options: {},
 }, 'css-loader'];

 if (extra) {
  loaders.push(extra);
 }

 return loaders;
}

module.exports = {
 context: path.resolve(__dirname, 'src'),
 mode: 'development',
 entry: {
  main: './index.ts',
 },
 output: {
  filename: '[name].[contenthash].js',
  path: path.resolve(__dirname, 'docs')
 },
 optimization: {
  splitChunks: {
   chunks: 'all'
  }
 },
 devtool: 'source-map',
 plugins: [
  new HTMLWebpackPlugin(
   {
    template: './index.pug',
    chunks: ['main'],
   }
  ),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
   $: 'jquery',
   jQuery: 'jquery'
  }),
  new MiniCssExtractPlugin({
   filename: '[name].[hash].css'
  }),
 ],
 module: {
  rules: [
   {
    test: /\.css$/,
    use: cssLoaders()
   },
   {
    test: /\.pug$/,
    use: ["pug-loader"],
   },
   {
    test: /\.(png|jpg|svg|gif)$/,
    use: ['file-loader']
   },
   {
    test: /\.(ttf|woff|woff2|eot|otf)$/,
    use: ['file-loader']
   },
   {
    test: /\.s[ac]ss$/,
    use: cssLoaders('sass-loader')
   }
  ]
 }
};