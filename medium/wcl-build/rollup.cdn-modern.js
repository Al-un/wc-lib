// Import rollup plugins
import { defineConfig } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

import {
  allComponentFiles,
  commonPlugins,
  handleEntryFileName,
} from './rollup.utils';
import { terser } from 'rollup-plugin-terser';

const OUTPUT_DIR = 'modern';

export default defineConfig([
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

      // Minify JS
      terser({
        module: true,
        warnings: true,
      }),

      summary(),
    ],
    output: [
      {
        format: 'esm',
        entryFileNames: handleEntryFileName,
        dir: OUTPUT_DIR,
      },
    ],
  },
]);
