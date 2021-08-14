// Import rollup plugins
import { defineConfig } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import summary from 'rollup-plugin-summary';

import {
  allComponentFiles,
  commonPlugins,
  handleEntryFileName,
} from './rollup.utils';

const OUTPUT_DIR = 'dist';

export default defineConfig([
  {
    input: { ...allComponentFiles, main: 'src/index.ts' },

    plugins: [
      peerDepsExternal(),

      ...commonPlugins({ outDir: OUTPUT_DIR }),

      typescript({
        exclude: [
          // Exclude Storybook stories
          '**/*.stories.ts',
          // Exclude test files
          '**/*.spec.ts',
        ],
        // https://lit.dev/docs/tools/publishing/#compiling-with-typescript
        declaration: true,
        declarationMap: true,
        outDir: OUTPUT_DIR,
      }),

      minifyHTML(),

      // // Optional: copy any static assets to build directory
      // copy({
      //   patterns: ['data/**/*', 'images/**/*'],
      // }),

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
