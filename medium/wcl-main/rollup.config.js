import { defineConfig } from 'rollup';

import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';

import scssToLit from './rollup.scss-to-lit';

// ----------------------------------------------------------------------------

export default defineConfig({
  // Re-export all components from here
  input: {
    'super-button.css': 'src/components/super-button.scss',
    'super-button': 'src/components/super-button.ts',
    index: 'src/index.ts',
  },
  // Build in ES Modules syntax
  output: [{ format: 'es', dir: 'dist' }],
  plugins: [
    // Define path aliases
    alias({
      entries: [{ find: /^@wcl-main\/(.*)$/, replacement: 'src/$1' }],
    }),

    // Resolve node modules
    resolve(),

    scssToLit(),

    typescript(),

    // Print bundle summary
    summary(),
  ],

  preserveEntrySignatures: 'strict',
});
