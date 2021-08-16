[![CircleCI](https://circleci.com/gh/Al-un/wc-lib/tree/master.svg?style=shield)](https://circleci.com/gh/Al-un/wc-lib/tree/master)

# WCL: Web Components libraries

## Getting started

```sh
yarn

yarn lerna run storybook
```

## Packages

### Components packages

- [`wcl-core`](packages/wcl-core/): Core package for common utilities:

  - **Storybook stories builder**: All web components implementations are expected
    to achieve the same result so the same stories structure must be applicable
  - **SCSS styling**: All web components implementations are expected to rely on
    the same styling
  - **Typing**: Because TypeScript.

- [`wcl-lit-ts`](packages/wcl-lit-ts/): Lit Element, TypeScript flavoured,
  implementation

### Demos packages

- [`vanilla-html`](demos/vanilla-html/): Bare HTML usage of web components,
  relying on CDN distribution. Uses `wcl-lit-ts`
- [`vanilla-js`](demos/vanilla-js/): Using `wcl-lit-ts` NPM package
- [`vanilla-ts`](demos/vanilla-ts/): Using `wcl-lit-ts` NPM package

### Medium packages

Those packages do not belong to the mono-repository structure.

- [`wcl-main`](medium/wcl-main): Demonstration of library setup (Lit +
  Storybook) with SCSS & PostCSS
- [`wcl-build`](medium/wcl-build): Focus on library build & distribution (NPM
  package + CDN distribution) for both modern and legacy browsers
- [`wcl-app`](medium/wcl-app): Example of `wcl-build` consumer application with
  Webpack as bundler

## Notes

- Testing
  - Snapshot errors
    - https://github.com/open-wc/open-wc/issues/2128
    - https://github.com/open-wc/open-wc/issues/1845
