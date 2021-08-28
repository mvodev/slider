// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require('./webpack.config');

module.exports = function (config) {
 config.set({
  basePath: '',
  frameworks: ['jasmine'],
  files: [
   'src/test/*.*.ts',
   { pattern: 'src/styles/fsd-slider-copy.css', included: true, watched: false },
  ],
  exclude: [],
  preprocessors: {
   'src/test/*.ts': 'webpack',
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