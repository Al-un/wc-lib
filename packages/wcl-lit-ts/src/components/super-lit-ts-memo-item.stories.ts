import { Story } from '@storybook/web-components';
import {
  SuperMemoItemStories,
  SuperMemoItemStoryAttrs,
} from '@al-un/wcl-core/storybook/stories-lit';
import { html } from 'lit-html';
import './super-lit-ts-memo-item';

const Template: Story<SuperMemoItemStoryAttrs> = ({ memo, onDelete }) =>
  html`<super-lit-ts-memo-item
    .memo=${memo}
    @delete=${onDelete}
  ></super-lit-ts-memo-item>`;

const { Default, componentMeta } = SuperMemoItemStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsMemoItem' },
  Template
);
export { componentMeta as default, Default };
