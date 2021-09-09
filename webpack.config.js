/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
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

let demoConfig = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin(
      {
        template: './index.pug',
        chunks: ['main'],
      }
    ),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/'),
          to: path.resolve(__dirname, 'docs')
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'fsd-slider.css'
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
      },
      {
        test: /\.ts(x?)$/,
        exclude: ['/node_modules/'],
        use: [
          'babel-loader',
          'ts-loader',
        ]
      },
    ]
  }
};

let libConfig = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    lib: './fsd-slider.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'fsd-slider.js',
    path: path.resolve(__dirname, './slider'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin(
      {
        template: './index.pug',
        chunks: ['lib'],
      }
    ),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/'),
          to: path.resolve(__dirname, 'docs')
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'fsd-slider.css'
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
      },
      {
        test: /\.ts(x?)$/,
        exclude: ['/node_modules/'],
        use: [
          'babel-loader',
          'ts-loader',
        ]
      },
    ]
  },
};

module.exports = [demoConfig, libConfig];