/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = (extra) => {
  const loaders = [{
    loader: MiniCssExtractPlugin.loader,
    options: {},
  }, 'css-loader'];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const libConfig = {
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
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fsd-slider.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.ts(x?)$/,
        exclude: ['/node_modules/'],
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
    ],
  },
};

module.exports = libConfig;
