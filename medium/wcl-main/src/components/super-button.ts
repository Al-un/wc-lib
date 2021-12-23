import {
  CSSResult,
  html,
  LitElement,
  PropertyDeclaration,
  PropertyDeclarations,
  TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import styling from '@wcl-main/components/super-button.scss';

export type SuperButtonTheme = 'primary' | 'danger';

interface SuperButtonPropsDeclaration extends PropertyDeclarations {
  theme: PropertyDeclaration;
}

// customElement decorator defines and register the custom element:
// https://lit.dev/docs/api/decorators/#customElement
@customElement('super-button')
export class SuperButton extends LitElement {
  /** Button theme, default to "primary" */
  theme!: SuperButtonTheme;
  /** Button disabled state */
  disabled!: boolean;

  constructor() {
    super();

    this.theme = 'primary';
    this.disabled = false;
  }

  // some basic button styling to get started. We will improve it later
  // when introducing SCSS
  static get styles(): CSSResult[] {
    return [styling];
  }

  /**
   * List of button properties that can be defined by an attribute
   *
   * TS decorators cannot be used due to bug when introducing Storybook.
   * If you skip the Storybook part, using TS decorators is totally fine
   *
   * Issue mentioned in Storybook kitchen sink:
   * https://github.com/storybookjs/storybook/blob/next/examples/web-components-kitchen-sink/src/components/sb-button.ts#L57
   * Related Lit property issue:
   * https://github.com/Polymer/lit-html/issues/1476
   *
   * @example
   *  <super-button theme="danger">Caution!</super-button>
   *
   * @see StaticProperties https://lit.dev/docs/components/properties/#declaring-properties-in-a-static-properties-field
   * @see PropertyOptions https://lit.dev/docs/components/properties/#property-options
   */
  static get properties(): SuperButtonPropsDeclaration {
    return {
      disabled: { type: Boolean },
      theme: { type: String },
    };
  }

  /**
   * List of CSS classes to apply to a single elements thanks the built-in
   * `classMap` directive
   *
   * @see classMap https://lit.dev/docs/templates/directives/#classmap
   */
  get cssClasses(): ClassInfo {
    return { 'super-button': true, [this.theme]: true };
  }

  render(): TemplateResult {
    return html`<button
      class=${classMap(this.cssClasses)}
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
