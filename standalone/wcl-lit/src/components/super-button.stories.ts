import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';

import '@wcl-lit/components/super-button';
import { SuperButtonTheme } from '@wcl-lit/components/super-button';

interface SuperButtonStoryAttrs {
  content: string;
  disabled: boolean;
  theme: SuperButtonTheme;
  onClick: () => void;
}

export default {
  title: `WCL/components/SuperButton`,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    theme: { control: 'select', options: ['primary', 'danger'] },
    onClick: { action: 'onClick' },
  },
  args: { content: 'My super button!', disabled: false, theme: 'primary' },
} as Meta;

const Template: Story<SuperButtonStoryAttrs> = ({
  content,
  disabled,
  theme,
  onClick,
}) => html`<super-button ?disabled=${disabled} .theme=${theme} @click=${onClick}
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
