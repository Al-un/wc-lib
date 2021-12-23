// To handle SCSS imports in Lit components
//
// Copied from
//  https://gist.github.com/calebdwilliams/b3d6b2c2ca242e8aec5acafd0a532db2
// Other refs:
//  https://github.com/ponday-dev/rollup-plugin-lit-sass/blob/master/src/index.js

import { resolve, extname } from 'path';
import sass from 'sass';

// function transform(css) {
//   return `import { css } from 'lit-element';
//     export default css${stringToTemplateLiteral(css)};`;
// }

function isScss(id) {
  return extname(id) === '.scss';
}

/** @type {import("rollup").PluginImpl} */
const scssToLitCss = () => {
  return {
    name: 'scss-to-lit',
    load(id) {
      if (isScss(id)) {
        this.addWatchFile(resolve(id));
      }
    },
    transform(code, id) {
      if (!isScss(id)) {
        return;
      }

      const result = sass.compile(resolve(id));
      const css = result.css;
      const litCss = `import { css } from 'lit-element';
export default css\`${css}\`;`;

      return { code: litCss, map: { mappings: '' } };
    },
  };
};

export default scssToLitCss;
