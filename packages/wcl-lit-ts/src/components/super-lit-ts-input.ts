import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-input.scss';
import { SuperInputProps } from '@wcl-core/types';
import { LitPropsDeclaration } from '@wcl-lit-ts/utils';

@customElement('super-lit-ts-input')
export class SuperLitTsInput extends LitElement implements SuperInputProps {
  static styles = unsafeCSS(scss);

  label?: string;
  type!: string;
  value!: string | number;
  // https://github.com/lit/lit-element/issues/1121
  // Replaced by https://medium.com/collaborne-engineering/litelement-two-way-data-binding-48aec4692f7e
  // @query('input', true) _inputElement!: HTMLInputElement;

  constructor() {
    super();

    this.value = '';
    this.type = 'text';
  }

  static get properties(): LitPropsDeclaration<SuperInputProps> {
    return {
      label: { type: String },
      type: { type: String },
      value: { type: [String, Number] },
    };
  }

  render(): TemplateResult {
    return html` ${this.label
      ? html`<label for="my-input">${this.label}</label>`
      : ''}
    ${this.type === 'textarea'
      ? html`<textarea
          id="my-input"
          .value=${this.value}
          @input=${this.onInput}
        >
${this.value}</textarea
        >`
      : html`<input
          id="my-input"
          .value=${this.value}
          type=${this.type}
          @input=${this.onInput}
        />`}`;
  }

  onInput(event: InputEvent): void {
    event.stopImmediatePropagation();

    if (this.type === 'textarea') {
      const textArea = this.shadowRoot?.querySelector(
        'textarea'
      ) as HTMLTextAreaElement;
      if (!textArea) {
        return;
      }

      this.value = textArea.value;
    } else {
      const inputEl = this.shadowRoot?.querySelector(
        'input'
      ) as HTMLInputElement;
      if (!inputEl) {
        return;
      }

      this.value = inputEl.value;
    }

    this.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        detail: { value: this.value },
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-input': SuperLitTsInput;
  }
}
