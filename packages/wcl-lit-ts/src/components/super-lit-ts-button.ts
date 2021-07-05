import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-button.scss';
import { SuperButtonTheme } from '@al-un/wcl-core/types';

@customElement('super-lit-ts-button')
export class SuperLitTsButton extends LitElement {
  static styles = unsafeCSS(scss);

  // @property({ type: Boolean })
  // solid = false;

  // @property({ type: Boolean })
  // outline = false;

  // @property({ type: Boolean })
  // primary = false;

  // @property({ type: Boolean })
  // danger = false;

  disabled!: boolean;
  outline!: boolean;
  theme!: SuperButtonTheme;

  constructor() {
    super();

    this.outline = false;
    this.disabled = false;
    this.theme = 'primary';
  }

  static get properties() {
    return {
      disabled: { type: Boolean },
      outline: { type: Boolean },
      theme: { type: String },
    };
  }

  get cssClasses(): ClassInfo {
    return {
      'super-button': true,
      [this.theme]: true,
      outline: this.outline,
    };
  }

  render(): TemplateResult {
    return html`<button
      class=${classMap(this.cssClasses)}
      ?disabled=${this.disabled}
    >
      <slot name="icon"></slot>
      <span class="content"><slot></slot></span>
    </button>`;
  }
}
