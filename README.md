[![CircleCI](https://circleci.com/gh/Al-un/wc-lib/tree/master.svg?style=svg)](https://circleci.com/gh/Al-un/wc-lib/)

# WCL: Web Components libraries

## Getting started

```sh
yarn

yarn lerna run storybook
```

## Packages

- [`wcl-core`](packages/wcl-core/)

  Core package for common utilities:

  - **Storybook stories builder**: All web components implementations are expected
    to achieve the same result so the same stories structure must be applicable
  - **SCSS styling**: All web components implementations are expected to rely on
    the same styling
  - **Typing**: Because TypeScript.

- [`wcl-lit-ts`](packages/wcl-lit-ts/)

  Lit Element, TypeScript flavoured, implementation
