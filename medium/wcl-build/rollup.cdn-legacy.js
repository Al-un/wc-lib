// Import rollup plugins
import { defineConfig } from 'rollup';

import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

import {
  allComponentFiles,
  commonPlugins,
  handleEntryFileName,
} from './rollup.utils';
import { terser } from 'rollup-plugin-terser';

const OUTPUT_DIR = 'legacy';

export default defineConfig([
  // Main legacy configuration
  {
    input: { ...allComponentFiles, main: 'src/index.ts' },

    plugins: [
      ...commonPlugins({ outDir: OUTPUT_DIR }),

      typescript({
        exclude: [
          // Exclude Storybook stories
          '**/*.stories.ts',
          // Exclude test files
          '**/*.spec.ts',
        ],
        declaration: false,
        outDir: OUTPUT_DIR,
      }),

      minifyHTML(),

      // Uses babel to compile JS to ES5 and modules to SystemJS
      // https://github.com/rollup/plugins/tree/master/packages/babel#running-babel-on-the-generated-code
      getBabelOutputPlugin({
        compact: true,
        presets: [
          ['@babel/preset-env', { targets: { ie: '11' }, modules: 'systemjs' }],
        ],
      }),

      copy({
        targets: [
          {
            // To include web components polyfills, custom elements polyfills
            // shady CSS polyfills
            src: 'node_modules/@webcomponents',
            dest: `${OUTPUT_DIR}/polyfills`,
          },
          {
            // Lit Element specific polyfills
            src: 'node_modules/lit/polyfill-support.js',
            dest: `${OUTPUT_DIR}/polyfills/lit`,
          },
          {
            // To ensure SystemJS code works
            src: 'node_modules/systemjs/dist/s.min.js',
            dest: `${OUTPUT_DIR}/polyfills/systemjs`,
          },
        ],
      }),

      // Minify JS
      terser({
        module: true,
        warnings: true,
      }),

      summary(),
    ],
    output: [
      {
        // Legacy JS bundles (ES5 compilation and SystemJS module output)
        format: 'esm', // Babel will output it as SystemJS
        entryFileNames: handleEntryFileName,
        dir: OUTPUT_DIR,
      },
    ],
  },
  // Additional Babel polyfills for older browsers that don't support ES2015+.
  {
    input: 'src/babel-polyfills-nomodule.js',
    output: {
      file: `${OUTPUT_DIR}/polyfills/babel-polyfills-nomodule.js`,
      format: 'iife',
    },
    plugins: [commonjs(), resolve(), terser(), summary()],
  },
  // Convenience to have all polyfills bundled in a single place
  {
    input: 'src/all-polyfills.js',
    output: {
      file: `${OUTPUT_DIR}/all-polyfills.js`,
      format: 'iife',
    },
    plugins: [commonjs(), resolve(), terser(), summary()],
  },
]);
