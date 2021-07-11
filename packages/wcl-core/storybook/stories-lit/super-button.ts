import { Meta, Story } from '@storybook/web-components';

import {
  SuperButtonMetaBuilder,
  SuperButtonStoriesBuilder,
  SuperButtonStoryAttrs,
} from '../types';

import DeleteIcon from '@wcl-core/assets/delete-black.svg';

export const SuperButtonMeta: SuperButtonMetaBuilder<Meta> = ({
  folderName,
  componentName,
}) => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    outline: { control: 'boolean' },
    icon: { control: 'text' },
    theme: { control: 'select', options: ['primary', 'danger'] },
    onClick: { action: 'onClick' },
  },
  args: {
    content: 'This is a super button',
    disabled: false,
    outline: false,
    icon: DeleteIcon,
    theme: 'primary',
  },
});

export const SuperButtonStories: SuperButtonStoriesBuilder<
  Meta,
  Story<SuperButtonStoryAttrs>
> = (compInfo, template) => {
  const Default = template.bind({});

  return {
    Default,
    componentMeta: SuperButtonMeta(compInfo),
  };
};
