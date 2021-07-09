import { defineConfig } from 'rollup';

import { getFilesPath } from '../wcl-core/utils/files';
import rollupCoreConfig from './rollup.config.core';

// ----------------------------------------------------------------------------

/** Get all components file. @todo: improve Regex T_T */
const pattern1 = /^[\w-]+(?!(stories|spec))\.ts$/;
/** Get all .spec.ts files */
const pattern2 = /^[\w-]+\.spec\.ts$/;

export default defineConfig({
  ...rollupCoreConfig,
  input: [...getFilesPath('src', pattern1), ...getFilesPath('src', pattern2)],
  output: [{ format: 'es', dir: 'dist' }],
});
