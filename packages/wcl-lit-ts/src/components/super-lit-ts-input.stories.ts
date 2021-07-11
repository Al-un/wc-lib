import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { SuperInputStories } from '@al-un/wcl-core/storybook/stories-lit';
import { SuperInputStoryAttrs } from '@al-un/wcl-core/storybook/types';

import './super-lit-ts-input';

const Template: Story<SuperInputStoryAttrs> = ({
  label,
  value,
  type,
  onInput,
}) =>
  html`<super-lit-ts-input
    label=${label}
    value=${value}
    type=${type}
    @input=${onInput}
  ></super-lit-ts-input>`;

const {
  Default,
  InputText,
  InputNumber,
  InputPassword,
  InputTextArea,
  componentMeta,
} = SuperInputStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsInput' },
  Template
);
export {
  componentMeta as default,
  Default,
  InputText,
  InputNumber,
  InputPassword,
  InputTextArea,
};
