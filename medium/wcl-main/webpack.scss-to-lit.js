// Copied / Inspired from:
//  https://github.com/drdreo/lit-scss-loader
//  https://github.com/clicksolutions/lit-element-scss-loader
//
// Requires extract-loader

// eslint-disable-next-line no-undef
module.exports = function (content) {
  return `import { css } from 'lit';
export default css\`${content}\`;`;
};
