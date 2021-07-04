import { defineConfig } from 'rollup';

import { getFilesPath } from '../wcl-core/utils/files';
import rollupCoreConfig from './rollup.config.core';

// ----------------------------------------------------------------------------

/** Get all TypeScript files excluding Storybook stories and testing files */
const pattern = /^[\w-]+(?!(stories|spec))\.ts$/;

export default defineConfig({
  ...rollupCoreConfig,
  input: getFilesPath('src', pattern),
  output: [{ format: 'es', dir: 'dist' }],
});
