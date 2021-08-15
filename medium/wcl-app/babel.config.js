/* eslint-disable no-undef */
module.exports = {
  // https://github.com/lit/lit-element/issues/883#issuecomment-577651183
  // .babelrc must be renamed babel.config.js to handle node_modules
  ///
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env.html
      '@babel/preset-env',
      {
        // https://github.com/lit/lit-element/issues/978#issuecomment-621044959
        modules: false,
        targets: { ie: 11 },
      },
    ],
  ],
  // https://github.com/lit/lit-element/issues/883#issuecomment-577651183
  plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]],
};
