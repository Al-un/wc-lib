import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styling from '@wcl-build/components/super-text.scss';

/**
 * Simple paragraph component which displays a text in some light gray or the
 * color defined by `--wcl-text` CSS variable.
 */
@customElement('super-text')
export class SuperText extends LitElement {
  @property({ type: Boolean, reflect: true })
  bold = false;

  static styles = css`
    ${unsafeCSS(styling)}
  `;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-text': SuperText;
  }
}
