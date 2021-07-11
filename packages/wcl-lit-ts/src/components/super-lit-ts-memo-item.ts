import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import scss from '@al-un/wcl-core/styles/components/super-all/super-memo-item.scss';
import { SuperMemo, SuperMemoItemProps } from '@al-un/wcl-core/types';

import './super-lit-ts-button';
import { LitPropsDeclaration } from '@wcl-lit-ts/utils';

@customElement('super-lit-ts-memo-item')
export class SuperLitTsMemoItem
  extends LitElement
  implements SuperMemoItemProps
{
  static styles = unsafeCSS(scss);

  memo!: SuperMemo;

  constructor() {
    super();

    this.memo = { id: 1, title: 'no title', text: '' };
  }

  static get properties(): LitPropsDeclaration<SuperMemoItemProps> {
    return { memo: { type: Object } };
  }

  render(): TemplateResult {
    return html` <div class="memo-title">
        ${this.memo.id} | ${this.memo.title}
      </div>
      <div class="memo-text">${this.memo.text}</div>
      <super-lit-ts-button
        theme="danger"
        class="memo-delete"
        @click=${this.onDelete}
        >Delete</super-lit-ts-button
      >`;
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
