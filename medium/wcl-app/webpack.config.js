/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNoModulePlugin =
  require('webpack-nomodule-plugin').WebpackNoModulePlugin;

const CHUNKS = {
  MAIN: 'main',
  MAIN_LEGACY: 'main-legacy',
  NAV_MENU: 'navMenu',
  POLY_BABEL: 'polyfills-babel',
  POLY_LIT: 'polyfills-lit',
  POLY_WC: 'polyfills-webcomponents',
};

/** @type {import("webpack").Configuration} */
const webpackConfig = {
  // https://webpack.js.org/configuration/mode/
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // https://webpack.js.org/configuration/entry-context/#entry
  entry: {
    [CHUNKS.MAIN]: path.resolve(__dirname, 'src/index.ts'),
    [CHUNKS.MAIN_LEGACY]: path.resolve(__dirname, 'src/index-legacy.ts'),
    [CHUNKS.NAV_MENU]: path.resolve(__dirname, 'src/nav-menu.ts'),
    [CHUNKS.POLY_BABEL]: path.resolve(__dirname, 'src/polyfills-babel.js'),
    [CHUNKS.POLY_LIT]: path.resolve(
      __dirname,
      'node_modules/lit/polyfill-support.js'
    ),
    [CHUNKS.POLY_WC]: path.resolve(
      __dirname,
      'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'
    ),
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      // https://github.com/babel/babel-loader#top-level-function-iife-is-still-arrow-on-webpack-5
      arrowFunction: false,
    },
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                target: 'es5',
              },
            },
          },
        ],
      },
      // https://webpack.js.org/loaders/babel-loader/
      // https://www.robinwieruch.de/webpack-babel-setup-tutorial
      // Babel polyfills deprecated: https://babeljs.io/docs/en/babel-polyfill
      {
        // test: /legacy\.(js)$/,
        test: /\.(js)$/,
        // https://lit-element.polymer-project.org/guide/build#supporting-older-browsers
        // https://github.com/lit/lit-element/issues/978
        // https://github.com/lit/lit-element/issues/883#issuecomment-577591359
        exclude:
          /node_modules\/(?!(@al-un\/wcl-build|@lit|lit|lit-element|lit-html)\/).*/,
        options: {
          cacheDirectory: true,
        },
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    // https://www.npmjs.com/package/clean-webpack-plugin
    new CleanWebpackPlugin(),

    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'pages/index.html'),
      filename: 'index.html',
      inject: 'body',
      hash: false,
      chunks: [
        CHUNKS.POLY_BABEL,
        CHUNKS.POLY_LIT,
        CHUNKS.POLY_WC,
        CHUNKS.NAV_MENU,
        CHUNKS.MAIN,
        // CHUNKS.MAIN_LEGACY,
      ],
      // chunks: [CHUNKS.MAIN, CHUNKS.NAV_MENU],
      chunksSortMode: 'manual',
    }),
    // https://github.com/swimmadude66/webpack-nomodule-plugin
    // To have polyfills loaded by legacy browsers only
    new WebpackNoModulePlugin({
      // filePatterns: ['**legacy**.js', '**polyfills**.js'],
      filePatterns: ['**polyfills**.js'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'pages/cdn-modern.html'),
      filename: 'cdn-modern.html',
      hash: false,
      chunks: [CHUNKS.NAV_MENU],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'pages/cdn-universal.html'),
      filename: 'cdn-universal.html',
      hash: false,
      chunks: [CHUNKS.NAV_MENU],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'pages/selected-components-only.html'),
      filename: 'selected-components-only.html',
      hash: false,
      chunks: [CHUNKS.NAV_MENU],
    }),
  ],
};

module.exports = webpackConfig;
