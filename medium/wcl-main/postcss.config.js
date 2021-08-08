/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [postcssPresetEnv({ stage: 2 })],
};
