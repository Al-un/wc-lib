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
  static styles = unsafeCSS(scss);

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

  render(): TemplateResult {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-card': SuperLitTsCard;
  }
}
