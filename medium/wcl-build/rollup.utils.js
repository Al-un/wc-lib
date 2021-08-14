import fs from 'fs';
import path from 'path';

import alias from '@rollup/plugin-alias';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

/**
 * Utility function to recursively fetch the list of components files
 * according to the provided pattern
 *
 * @param {String} dirPath source directory to start searching
 * @param {RegExp} pattern pattern to identify components files
 * @returns {String[]} list of absolute paths to components
 */
export const getFilesPath = (dirPath, pattern) => {
  const dirContent = fs.readdirSync(dirPath);
  let allFilesPath = [];

  dirContent.forEach((file) => {
    // Scan subdirectory
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      allFilesPath = {
        ...allFilesPath,
        ...getFilesPath(`${dirPath}/${file}`, pattern),
      };
    }
    // Check if scanned file is a common component
    else if (pattern.test(file)) {
      allFilesPath = {
        ...allFilesPath,
        // bundle key: {folder}-{file}
        [dirPath.substring(4) + '/' + file.substring(0, file.length - 3)]:
          path.join(dirPath, '/', file),
      };
    }
  });

  return allFilesPath;
};

/**
 * List of components files for this project example starting from
 * `src/components` by searching for TypeScript files and excluding unit tests
 * and stories files
 */
export const allComponentFiles = getFilesPath(
  'src/components',
  /^[\w-]+(?!(stories|spec))\.ts$/
);

/**
 * Helper to convert a "main" chunk into "index.js" without hash while other
 * chunks keep their names with an appended hash
 *
 * @param {import('rollup').PreRenderedChunk} chunkInfo chunk information
 * @param {Object} options
 * @param {Boolean} options.hash if true, add hash to non-index index files.
 * Default is false
 * @param {String} options.main main chunk name, resulting in an "index.js".
 * Default to "main"
 *
 * @returns {String} Chunk final file name
 */
export const handleEntryFileName = (chunkInfo, { hash, main } = {}) => {
  if (chunkInfo.name === (main || 'main')) {
    return 'index.js';
  }

  const chunkFileName = hash ? '[name].[hash].js' : '[name].js';
  return chunkFileName;
};

/**
 * List of Rollup plugins common to all configurations
 *
 * @param {Object} options Additional customizations
 * @param {String} options.outDir Expected output directory
 * @param {Boolean} options.minCss Minimize CSS output within components
 *
 * @return {import('rollup').Plugin[]}
 */
export const commonPlugins = ({ outDir, minCss }) => [
  // Define path aliases
  alias({
    entries: [{ find: /^@wcl-build\/(.*)$/, replacement: 'src/$1' }],
  }),

  // Resolve bare module specifiers to relative paths
  resolve(),

  postcss({
    // Define loader to use
    use: ['sass'],
    // Override the default extensions set
    extensions: ['.scss'],
    // No injection in some <head>
    inject: false,
    // Don't extract styling into dedicated files
    extract: false,
    // Minimize styling within each component
    minimize: minCss || true,
    // PostCSS configuration file is then shared between Rollup and Storybook
    config: 'postcss.config.js',
  }),

  // Copy static assets to build directory
  copy({
    targets: [{ src: 'src/assets/**/*', dest: `${outDir}/assets` }],
  }),

  image(),
];
