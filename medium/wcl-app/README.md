# WCL App <!-- omit in toc -->

Consumer application of [_WCL Build_](https://github.com/Al-un/wc-lib/tree/master/medium/wcl-build)

- [Getting started](#getting-started)
- [Pages](#pages)
- [Notes](#notes)
  - [Tree Shaking:](#tree-shaking)
  - [Polyfills](#polyfills)

## Getting started

```sh
npm install
npm start
```

## Pages

- `index.html`
  Import WCL Build as NPM package
- `cdn-modern.html`
  Use the CDN Modern distribution only
- `cdn-universal.html`
  Use Modern CDN distribution on browsers supporting ES Modules syntax.
  Otherwise Legacy CDN distribution is loaded with all the polyfills
- `selected-components-only.html`
  Similar to `cdn-universal.html` but load only `<super-memo>` file which will
  also loads `<super-card>` as well as `<super-button>` but `<super-text>`
  should not be loaded

## Notes

### Tree Shaking:

https://webpack.js.org/guides/tree-shaking/

### Polyfills

- `custom-elements-es5-adapter.js` not required