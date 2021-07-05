import { Story } from '@storybook/web-components';
import {
  SuperInputStories,
  SuperInputStoryAttrs,
} from '@al-un/wcl-core/storybook/stories-lit';
import { html } from 'lit-html';
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
