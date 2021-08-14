import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styling from '@wcl-build/components/super-button.scss';

export type SuperButtonTheme = 'primary' | 'danger';

@customElement('super-button')
export class SuperButton extends LitElement {
  @property({ type: String })
  theme: SuperButtonTheme = 'primary';

  static styles = css`
    ${unsafeCSS(styling)}
  `;
  // static styles = styling as unknown as CSSStyleSheet;

  render(): TemplateResult {
    const cssClasses = { 'super-button': true, [this.theme]: true };

    return html`<button class=${classMap(cssClasses)}>
      <slot></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'super-button': SuperButton;
  }
}
