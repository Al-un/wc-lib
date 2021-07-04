import {
  LitElement,
  css,
  CSSResultGroup,
  html,
  unsafeCSS,
  TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-memo.scss';
import { SuperMemo } from '@al-un/wcl-core/types';

import './super-lit-ts-button';
import './super-lit-ts-input';
import './super-lit-ts-memo-item';

@customElement('super-lit-ts-memo-list')
export class SuperLitTsMemoList extends LitElement {
  memos: SuperMemo[] = [];
  memoNextId = 10;
  title = 'Super Memos!';

  constructor() {
    super();
  }

  static get properties() {
    return { memos: { type: Array }, title: { type: String } };
  }

  static get styles(): CSSResultGroup {
    return css`
      ${unsafeCSS(scss)}
    `;
  }

  render(): TemplateResult {
    return html`<div class="memos-title">${this.title}</div>

      <div id="memo-content">
        ${this.memos.map(
          (memo) =>
            html`<super-lit-ts-memo-item
              class="super-memo-item"
              .memo=${memo}
              @delete=${this.onDeleteMemo}
            ></super-lit-ts-memo-item>`
        )}
      </div>

      <super-lit-ts-input></super-lit-ts-input>
      <super-lit-ts-button @click=${this.onAddMemo}>Add</super-lit-ts-button> `;
  }

  onDeleteMemo(deleteEvent: CustomEvent<{ memoId: number }>): void {
    this.memos = this.memos.filter((m) => m.id !== deleteEvent.detail.memoId);

    this.dispatchEvent(
      new CustomEvent('delete', {
        bubbles: true,
        detail: { memoId: deleteEvent.detail.memoId },
      })
    );
  }

  onAddMemo(): void {
    const input = this.shadowRoot?.querySelector('super-lit-ts-input');
    if (!input) {
      console.log('SNIF');
      return;
    }

    const newMemo: SuperMemo = {
      id: this.memoNextId++,
      title: '',
      text: input.value.toString(),
    };

    this.memos = [...this.memos, newMemo];
    input.value = '';

    this.dispatchEvent(
      new CustomEvent('add', {
        bubbles: true,
        detail: { memo: JSON.stringify(newMemo) },
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-lit-ts-memo-list': SuperLitTsMemoList;
  }
}
