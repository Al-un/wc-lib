import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-memo-list.scss';
import { SuperMemo, SuperMemoListProps } from '@al-un/wcl-core/types';

import { LitPropsDeclaration } from '@wcl-lit-ts/utils';
import './super-lit-ts-button';
import './super-lit-ts-card';
import './super-lit-ts-input';
import './super-lit-ts-memo-item';

@customElement('super-lit-ts-memo-list')
export class SuperLitTsMemoList
  extends LitElement
  implements SuperMemoListProps
{
  static styles = unsafeCSS(scss);

  _memoTitle = '';
  _memoText = '';
  memos: SuperMemo[] = [];
  memoNextId = 10;
  title = 'Super Memos!';

  constructor() {
    super();
  }

  static get properties(): LitPropsDeclaration<SuperMemoListProps> {
    return {
      _memoTitle: { type: String, state: true },
      _memoText: { type: String, state: true },
      memos: { type: Array },
      title: { type: String },
    };
  }

  get cannotCreateMemo(): boolean {
    return !this._memoTitle || !this._memoText;
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

      <super-lit-ts-card class="memo-new" padded>
        <super-lit-ts-input
          class="memo-title"
          type="text"
          label="Memo title"
          .value=${this._memoTitle}
          @input=${this.onMemoTitleInput}
        ></super-lit-ts-input>
        <super-lit-ts-input
          class="memo-text"
          type="textarea"
          label="Memo text"
          .value=${this._memoText}
          @input=${this.onMemoTextInput}
        ></super-lit-ts-input>
        <super-lit-ts-button
          class="memo-add"
          ?disabled=${this.cannotCreateMemo}
          @click=${this.onAddMemo}
          >Add</super-lit-ts-button
        >
      </super-lit-ts-card>`;
  }

  onMemoTitleInput(inputEvent: CustomEvent<{ value: string }>): void {
    this._memoTitle = inputEvent.detail.value;
  }

  onMemoTextInput(inputEvent: CustomEvent<{ value: string }>): void {
    this._memoText = inputEvent.detail.value;
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
    if (this.cannotCreateMemo) {
      return;
    }

    const newMemo: SuperMemo = {
      id: this.memoNextId++,
      title: this._memoTitle,
      text: this._memoText,
    };

    this.memos = [...this.memos, newMemo];
    this._memoTitle = '';
    this._memoText = '';

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
