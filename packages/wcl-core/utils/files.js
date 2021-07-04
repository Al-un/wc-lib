import fs from 'fs';
import path from 'path';

// Note: this file is written in plain JavaScript as it is used in RollUp
// config files

/**
 * Recursively scan a directory and returns the list of files path matching the
 * provided pattern
 *
 * @param {String} dirPath root directory
 * @param {RegExp} pattern File name pattern to filter accepted files
 * @returns {Array<String>} list of files path matching the pattern
 */
export const getFilesPath = (dirPath, pattern) => {
  const dirContent = fs.readdirSync(dirPath);
  let allFilesPath = [];

  dirContent.forEach((file) => {
    // Scan subdirectory
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      allFilesPath = [
        ...allFilesPath,
        ...getFilesPath(`${dirPath}/${file}`, pattern),
      ];
    }
    // Check if scanned file is a commmon component
    else if (pattern.test(file)) {
      allFilesPath = [...allFilesPath, path.join(dirPath, '/', file)];
    }
  });

  return allFilesPath;
};
