import {
  LitElement,
  css,
  CSSResultGroup,
  html,
  unsafeCSS,
  TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-input.scss';

@customElement('super-lit-ts-input')
export class SuperLitTsInput extends LitElement {
  label?: string;
  value!: string | number;
  // https://github.com/lit/lit-element/issues/1121
  // Replaced by https://medium.com/collaborne-engineering/litelement-two-way-data-binding-48aec4692f7e
  // @query('input', true) _inputElement!: HTMLInputElement;

  constructor() {
    super();

    this.value = '';
  }

  static get properties() {
    return {
      label: { type: String },
      value: { type: [String, Number] },
    };
  }

  static get styles(): CSSResultGroup {
    return css`
      ${unsafeCSS(scss)}
    `;
  }

  render(): TemplateResult {
    return html` ${this.label ? html`<label>${this.label}</label>` : ''}
      <input .value=${this.value} @input=${this.onInput} />`;
  }

  onInput(event: InputEvent): void {
    event.stopImmediatePropagation();

    const inputEl = this.shadowRoot?.querySelector('input') as HTMLInputElement;
    if (!inputEl) {
      return;
    }

    this.value = inputEl.value;

    this.dispatchEvent(new InputEvent('input'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-input': SuperLitTsInput;
  }
}
