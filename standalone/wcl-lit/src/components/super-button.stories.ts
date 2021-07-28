import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';

import '@wcl-lit/components/super-button';
import { SuperButtonTheme } from '@wcl-lit/components/super-button';

interface SuperButtonStoryAttrs {
  content: string;
  theme: SuperButtonTheme;
  onClick: () => void;
}

export default {
  title: `WCL/components/SuperButton`,
  argTypes: {
    content: { control: 'text' },
    theme: { control: 'select', options: ['primary', 'danger'] },
    onClick: { action: 'onClick' },
  },
  args: { content: 'My super button!', theme: 'primary' },
} as Meta;

const Template: Story<SuperButtonStoryAttrs> = ({
  content,
  theme,
  onClick,
}) => html`<super-button .theme=${theme} @click=${onClick}
  >${content}</super-button
>`;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger',
};
