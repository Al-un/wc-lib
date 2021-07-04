import { Story } from '@storybook/web-components';
import {
  SuperButtonStories,
  SuperButtonStoryAttrs,
} from '@al-un/wcl-core/storybook/stories-lit';
import { html } from 'lit-html';
import './super-lit-ts-button';

const Template: Story<SuperButtonStoryAttrs> = ({
  content,
  outline,
  theme,
  icon,
  onClick,
}) => html`<super-lit-ts-button
  .outline=${outline}
  .theme=${theme}
  @click=${onClick}
>
  ${icon ? html`<img slot="icon" src=${icon} />` : ''}
  ${content}</super-lit-ts-button
>`;

const { Default, componentMeta } = SuperButtonStories(
  { folderName: 'SuperLitTs', componentName: 'SuperLitTsButton' },
  Template
);
export { componentMeta as default, Default };
