module.exports = {
  "plugins": [
    [
      "module-resolver", {
        "alias": {
          '@@config': './src/config/config',
          '@@middlewares': './src/middlewares',
          '@@modules': './src/modules',
        },
      },
    ],
    // Stage 2
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    'dynamic-import-node',
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-json-strings"
  ],
  "presets": [
    ["@babel/preset-env", {
      targets: {
        node: '8.11',
      },
    }],
    "@babel/preset-typescript",
  ]
};
