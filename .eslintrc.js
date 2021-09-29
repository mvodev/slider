module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
    jasmine: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'fsd',
  ],
  ignorePatterns: ['fsd-slider.js'],
  rules: {
    'fsd/hof-name-prefix': 'error',
    'fsd/no-heavy-constructor': 'error',
    'fsd/jq-cache-dom-elements': 'error',
    'fsd/jq-use-js-prefix-in-selector': 'error',
    'fsd/no-function-declaration-in-event-listener': 'error',
    'fsd/split-conditionals': 'error',
    'linebreak-style': 0,
    'import/extensions': 'off',
  },
};
