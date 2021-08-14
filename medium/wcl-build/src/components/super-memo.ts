import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import icon from '@wcl-build/assets/description_black_24dp.svg';
import styling from '@wcl-build/components/super-memo.scss';

import './super-card';
import './super-button';

/**
 * Simple card with padding. Padding can be disabled
 */
@customElement('super-memo')
export class SuperMemo extends LitElement {
  @property({ type: String })
  title!: string;
  @property({ type: String })
  text!: string;

  static styles = css`
    ${unsafeCSS(styling)}
  `;

  __onMemoDelete(): void {
    const deleteEvent = new CustomEvent('delete', {
      detail: { title: this.title },
    });
    this.dispatchEvent(deleteEvent);
  }

  render(): TemplateResult {
    return html`<super-card>
      <h2 class="memo-title">
        <img src=${icon} />
        <span>${this.title}</span>
      </h2>
      <p class="memo-text">${this.text}</p>

      <div class="memo-actions">
        <super-button theme="danger" @click=${this.__onMemoDelete}
          >Delete</super-button
        >
      </div>
    </super-card>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-memo': SuperMemo;
  }
}
