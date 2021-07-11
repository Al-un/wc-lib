import { Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { SuperMemoItemStories } from '@al-un/wcl-core/storybook/stories-lit';
import { SuperMemoItemStoryAttrs } from '@al-un/wcl-core/storybook/types';

import './super-lit-ts-memo-item';

const Template: Story<SuperMemoItemStoryAttrs> = ({ memo, onDelete }) =>
  html`<super-lit-ts-memo-item
    .memo=${memo}
    @delete=${onDelete}
  ></super-lit-ts-memo-item>`;

const { Default, LongMemo, componentMeta } = SuperMemoItemStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsMemoItem' },
  Template
);
export { componentMeta as default, Default, LongMemo };
