import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { SuperCardStories } from '@al-un/wcl-core/storybook/stories-lit';
import { SuperCardStoryAttrs } from '@al-un/wcl-core/storybook/types';

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
