import { defineConfig } from 'rollup';

import { getFilesPath } from '../wcl-core/utils/files';
import rollupCoreConfig from './rollup.config.core';

// ----------------------------------------------------------------------------

/** Get all .spec.ts files */
const pattern = /^[\w-]+\.spec\.ts$/;

export default defineConfig({
  ...rollupCoreConfig,
  input: getFilesPath('src', pattern),
  output: [
    // To preserve folder structure: https://stackoverflow.com/a/66725897/4906586
    { format: 'es', dir: 'dist', exports: 'named', preserveModules: true },
  ],
});
