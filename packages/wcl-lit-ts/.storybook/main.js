const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@use '~@al-un/wcl-core/styles/abstracts' as *;`,
          },
        },
      ],
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@wcl-core': path.resolve(__dirname, '../../wcl-core'),
        '@wcl-lit-ts': path.resolve(__dirname, '../src'),
      },
    };

    return config;
  },
};
