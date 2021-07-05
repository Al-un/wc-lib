import { Story } from '@storybook/web-components';
import {
  SuperCardStories,
  SuperCardStoryAttrs,
} from '@al-un/wcl-core/storybook/stories-lit';
import { html } from 'lit-html';
import './super-lit-ts-card';

const Template: Story<SuperCardStoryAttrs> = ({ content, padded }) =>
  html`<super-lit-ts-card ?padded=${padded}>
    ${html`<div>${content}</div>`}
  </super-lit-ts-card>`;

const { Default, Padded, componentMeta } = SuperCardStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsCard' },
  Template
);
export { componentMeta as default, Default, Padded };
