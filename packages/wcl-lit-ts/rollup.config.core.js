// Rollup helper
import { defineConfig } from 'rollup';

// Import rollup plugins
import autoprefixer from 'autoprefixer';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import typescript2 from 'rollup-plugin-typescript2';
import summary from 'rollup-plugin-summary';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  plugins: [
    // https://github.com/rollup/plugins/tree/master/packages/alias
    alias({
      entries: [
        { find: /^@wcl-core\/(.*)$/, replacement: '@al-un/wcl-core/$1' },
      ],
    }),

    // Resolve bare module specifiers to relative paths
    resolve(),

    // https://github.com/ezolenko/rollup-plugin-typescript2
    typescript2({ typescript: require('typescript') }),

    // https://github.com/egoist/rollup-plugin-postcss==
    // https://dev.to/plebras/setting-up-a-javascript-build-process-using-rollup-n1e#less-and-postcss
    postcss({
      use: ['sass'],
      extensions: ['.scss'],
      // https://stackoverflow.com/questions/56097519/how-to-use-autoprefixer-with-web-components-litelement
      plugins: [autoprefixer],
      // loaders: ['sass'],
      inject: false,
      extract: false,
      minimize: false,
    }),

    // Print bundle summary
    summary(),
    // // Optional: copy any static assets to build directory
    // copy({
    //   patterns: ['images/**/*'],
    // }),
  ],

  preserveEntrySignatures: 'strict',
});
