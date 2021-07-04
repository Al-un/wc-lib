import {
  LitElement,
  css,
  CSSResultGroup,
  html,
  unsafeCSS,
  TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-memo-item.scss';
import { SuperMemo } from '@al-un/wcl-core/types';
import './super-lit-ts-button';

@customElement('super-lit-ts-memo-item')
export class SuperLitTsMemoItem extends LitElement {
  memo!: SuperMemo;

  constructor() {
    super();

    this.memo = { id: 1, title: 'no title', text: '' };
  }

  static get properties() {
    return { memo: { type: Object } };
  }

  static get styles(): CSSResultGroup {
    return css`
      ${unsafeCSS(scss)}
    `;
  }

  render(): TemplateResult {
    return html`<div>${this.memo.text}</div>
      <div>
        <super-lit-ts-button theme="danger" @click=${this.onDelete}
          >Delete</super-lit-ts-button
        >
      </div>`;
  }

  onDelete(): void {
    const deleteEvent = new CustomEvent('delete', {
      bubbles: true,
      detail: { memoId: this.memo.id },
    });
    this.dispatchEvent(deleteEvent);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-memo-item': SuperLitTsMemoItem;
  }
}
