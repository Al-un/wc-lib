import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-button.scss';
import { SuperButtonTheme } from '@al-un/wcl-core/types';

@customElement('super-lit-ts-button')
export class SuperLitTsButton extends LitElement {
  // @property({ type: Boolean })
  // solid = false;

  // @property({ type: Boolean })
  // outline = false;

  // @property({ type: Boolean })
  // primary = false;

  // @property({ type: Boolean })
  // danger = false;

  outline!: boolean;
  theme!: SuperButtonTheme;

  constructor() {
    super();

    this.outline = false;
    this.theme = 'primary';
  }

  static get properties() {
    return {
      outline: { type: Boolean },
      theme: { type: String },
    };
  }

  static styles = unsafeCSS(scss);

  get cssClasses(): ClassInfo {
    return {
      'super-button': true,
      [this.theme]: true,
      outline: this.outline,
    };
  }

  render(): TemplateResult {
    return html`<button class=${classMap(this.cssClasses)}>
      <slot name="icon"></slot>
      <span class="content"><slot></slot></span>
    </button>`;
  }
}
