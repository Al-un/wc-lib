import { Story } from '@storybook/web-components';
import {
  SuperCardStories,
  SuperCardStoryAttrs,
} from '@al-un/wcl-core/storybook/stories-lit';
import { html } from 'lit-html';
import './super-lit-ts-card';

const Template: Story<SuperCardStoryAttrs> = ({
  content,
  footer,
  header,
  padded,
}) =>
  html`<super-lit-ts-card ?padded=${padded}>
    ${header ? html`<div slot="header">${header}</div>` : ''}
    ${html`<div>${content}</div>`}
    ${footer ? html`<div slot="footer">${footer}</div>` : ''}
  </super-lit-ts-card>`;

const { Default, Padded, componentMeta } = SuperCardStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsCard' },
  Template
);
export { componentMeta as default, Default, Padded };
