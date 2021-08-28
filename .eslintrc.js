module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jquery": true,
        "jasmine": true,
        "node":true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "fsd"
    ],
    "rules": {
        "fsd/hof-name-prefix": "error",
        "fsd/no-heavy-constructor": "error",
        "fsd/jq-cache-dom-elements": "error",
        "fsd/jq-use-js-prefix-in-selector": "error",
        //"fsd/no-function-declaration-in-event-listener": "error",
        "fsd/split-conditionals": "error"
    }
};
