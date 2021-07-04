import {
  LitElement,
  css,
  CSSResultGroup,
  html,
  unsafeCSS,
  TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-card.scss';

@customElement('super-lit-ts-card')
export class SuperLitTsCard extends LitElement {
  padded!: boolean;

  constructor() {
    super();

    this.padded = false;
  }

  static get properties() {
    return {
      padded: { type: Boolean },
    };
  }

  static get styles(): CSSResultGroup {
    return css`
      ${unsafeCSS(scss)}
    `;
  }

  render(): TemplateResult {
    return html`
      <header class="card-header"><slot name="header"></slot></header>
      <main class="card-body"><slot></slot></main>
      <footer class="card-footer"><slot name="footer"></slot></footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-card': SuperLitTsCard;
  }
}
