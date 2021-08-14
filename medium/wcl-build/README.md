# WCL Build <!-- omit in toc -->

- [Objectives](#objectives)
- [Getting started](#getting-started)
- [Notes](#notes)
  - [Auto registration](#auto-registration)
  - [Polyfills](#polyfills)
  - [Independent output folder](#independent-output-folder)
  - [Cannot use @web/polyfills-loader](#cannot-use-webpolyfills-loader)

## Objectives

Focus on build based on [WCL Main](https://github.com/Al-un/wc-lib/tree/master/medium/wcl-main):

- NPM package: ES modules, no minification
- CDN Modern: ES modules, minified
- CDN Legacy: SystemJS, Polyfills available, minified

See [WCL App](https://github.com/Al-un/wc-lib/tree/master/medium/wcl-app) for
consuming this build

## Getting started

```sh
npm install

# To build everything
npm run build

# To build the NPM package only
npm run build:npm
# To build the CDN Modern mode only
npm run build:cdn-modern
# To build the CDN Legacy mode only
npm run build:cdn-legacy
```

## Notes

### Auto registration

Components are registered as soon as the file is imported. As the component
registry is global, ensure that there is no conflict with other components
library

### Polyfills

For legacy browsers (IE11, Edge pre-Chromium), some polyfills are necessary:

- Web Components polyfills
- SystemJS module loader
- CoreJs + Regenerator runtime to replace `@babel/polyfills`
- Lit Element polyfills

Sources:

- [Polymer Rollup example](https://github.com/Polymer/shop/tree/rollup-examples-v2)
- [`webcomponents/polyfills` repo](https://github.com/Polymer/shop/tree/rollup-examples-v2)\
- [`@babel/polyfill` deprecated since Babel 7.4.0](https://babeljs.io/docs/en/babel-polyfill)
- [lit.dev: Polyfills requirements](https://lit.dev/docs/tools/requirements/#polyfills)

### Independent output folder

As the file name are shared for each build configuration, shared chunks,
mainly derived from Lit library, will conflict: the Modern CDN configuration
writes the Lit chunks in ES modules while the Legacy CDN configuration writes
the Lit chunks in SystemJS syntax

### Cannot use @web/polyfills-loader

Cannot work because result.code include path relatively to build output. For
a CDN distribution, the path will not work as the script is expected to be
within an HTML and the path relative to this page will not find the polyfills

<details>
<summary>Polyfills loader output example</summary>

```js
const { createPolyfillsLoader } = require('@web/polyfills-loader');

const result = createPolyfillsLoader({
  // see configuration above
});

// ----- output

const result = {
  code:
    '(function () {\n' +
    '  function polyfillsLoader() {\n' +
    '    function loadScript(src, type, attributes = []) {\n' +
    '      return new Promise(function (resolve) {\n' +
    "        var script = document.createElement('script');\n" +
    '\n' +
    '        function onLoaded() {\n' +
    '          if (script.parentElement) {\n' +
    '            script.parentElement.removeChild(script);\n' +
    '          }\n' +
    '\n' +
    '          resolve();\n' +
    '        }\n' +
    '\n' +
    '        script.src = src;\n' +
    '        script.onload = onLoaded;\n' +
    '        attributes.forEach(att => {\n' +
    '          script.setAttribute(att.name, att.value);\n' +
    '        });\n' +
    '\n' +
    '        script.onerror = function () {\n' +
    "          console.error('[polyfills-loader] failed to load: ' + src + ' check the network tab for HTTP status.');\n" +
    '          onLoaded();\n' +
    '        };\n' +
    '\n' +
    '        if (type) script.type = type;\n' +
    '        document.head.appendChild(script);\n' +
    '      });\n' +
    '    }\n' +
    '\n' +
    '    var polyfills = [];\n' +
    '\n' +
    "    if (!('noModule' in HTMLScriptElement.prototype)) {\n" +
    "      polyfills.push(loadScript('./polyfills/regenerator-runtime.de2e6a3a74a500cae72a3cab1a403efc.js'));\n" +
    '    }\n' +
    '\n' +
    "    if (!('fetch' in window)) {\n" +
    "      polyfills.push(loadScript('./polyfills/fetch.a1ad5fb96dc0cb61b9454244c9bd7fe6.js'));\n" +
    '    }\n' +
    '\n' +
    "    polyfills.push(loadScript('./polyfills/systemjs.b6ad53205d8657841448f9c91e83f589.js'));\n" +
    '\n' +
    "    if (!('attachShadow' in Element.prototype) || !('getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) {\n" +
    "      polyfills.push(loadScript('./polyfills/webcomponents.d7ffce1754011cfedff5f846f12e0c11.js'));\n" +
    '    }\n' +
    '\n' +
    "    if (!('noModule' in HTMLScriptElement.prototype) && 'getRootNode' in Element.prototype) {\n" +
    "      polyfills.push(loadScript('./polyfills/custom-elements-es5-adapter.3342b468203af1a14ca005e80d14148f.js'));\n" +
    '    }\n' +
    '\n' +
    "    if (!('attachShadow' in Element.prototype)) {\n" +
    "      polyfills.push(loadScript('./polyfills/lit-polyfill-support.f00e6d94b7cf31b9c79908b36cca6ca0.js'));\n" +
    '    }\n' +
    '\n' +
    '    function loadFiles() {}\n' +
    '\n' +
    '    if (polyfills.length) {\n' +
    '      Promise.all(polyfills).then(loadFiles);\n' +
    '    } else {\n' +
    '      loadFiles();\n' +
    '    }\n' +
    '  }\n' +
    '\n' +
    "  if (!('noModule' in HTMLScriptElement.prototype)) {\n" +
    "    var s = document.createElement('script');\n" +
    '\n' +
    '    function onLoaded() {\n' +
    '      document.head.removeChild(s);\n' +
    '      polyfillsLoader();\n' +
    '    }\n' +
    '\n' +
    '    s.src = "./polyfills/core-js.31303f7a12f5061f9c66e8d189aff2fa.js";\n' +
    '    s.onload = onLoaded;\n' +
    '\n' +
    '    s.onerror = function () {\n' +
    "      console.error('[polyfills-loader] failed to load: ' + s.src + ' check the network tab for HTTP status.');\n" +
    '      onLoaded();\n' +
    '    };\n' +
    '\n' +
    '    document.head.appendChild(s);\n' +
    '  } else {\n' +
    '    polyfillsLoader();\n' +
    '  }\n' +
    '})();',
  polyfillFiles: [
    {
      path: 'some path',
      name: 'some name',
      content: 'stuff',
    },
    // etc...
  ],
};
```

</details>

Sources:

- https://modern-web.dev/docs/building/polyfills-loader/
- https://lit.dev/docs/tools/production/
