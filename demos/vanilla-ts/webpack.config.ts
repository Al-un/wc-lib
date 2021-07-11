import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

// TS config: https://webpack.js.org/configuration/configuration-languages/#typescript
const config: Configuration = {
  mode: 'development',

  entry: { main: './src/index.ts' },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
  ],

  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
};

export default config;
