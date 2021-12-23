declare module '*.scss' {
  // https://stackoverflow.com/a/60029264/4906586
  import { CSSResult } from 'lit';

  const styling: CSSResult;
  export default styling;
}
