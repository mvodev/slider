// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require('./webpack.config');

// eslint-disable-next-line func-names
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      './src/test/*.test.ts',
      './src/*/*.ts',
      './src/view/components/*.ts',
      './src/view/View.ts',
      { pattern: 'docs/fsd-slider.css', included: true, watched: false },
    ],
    exclude: [],
    preprocessors: {
      '**/*.ts': 'karma-typescript',
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      mode: webpackConfig.mode,
      devtool: 'inline-source-map',
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
