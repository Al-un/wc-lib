import { Story } from '@storybook/web-components';

import { SuperButtonTheme, ComponentInfo } from '@wcl-core/types';

import DeleteIcon from '@wcl-core/assets/delete-black.svg';

export interface SuperButtonStoryAttrs {
  content: string;
  outline: boolean;
  icon: string;
  theme: SuperButtonTheme;
  onClick: () => void;
}

export const SuperButtonMeta = ({
  folderName,
  componentName,
}: ComponentInfo) => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    content: { control: 'text' },
    outline: { control: 'boolean' },
    icon: { control: 'text' },
    theme: { control: 'select', options: ['primary', 'danger'] },
    onClick: { action: 'onClick' },
  },
  args: {
    content: 'This is a super button',
    outline: false,
    icon: DeleteIcon,
    theme: 'primary',
  },
});

export const SuperButtonStories = (
  { folderName, componentName }: ComponentInfo,
  template: Story<SuperButtonStoryAttrs>
) => {
  const Default = template.bind({});

  return {
    Default,
    componentMeta: SuperButtonMeta({ folderName, componentName }),
  };
};
