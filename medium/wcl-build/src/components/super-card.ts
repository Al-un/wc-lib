import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styling from '@wcl-build/components/super-card.scss';

/**
 * Simple card with padding. Padding can be disabled
 */
@customElement('super-card')
export class SuperCard extends LitElement {
  @property({ type: Boolean, reflect: true })
  padded = true;

  static styles = css`
    ${unsafeCSS(styling)}
  `;

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-card': SuperCard;
  }
}
