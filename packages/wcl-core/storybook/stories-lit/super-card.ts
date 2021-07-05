import { Story } from '@storybook/web-components';

import { ComponentInfo } from '@wcl-core/types';

export interface SuperCardStoryAttrs {
  content?: string;
  padded?: boolean;
}

export const SuperCardMeta = ({
  folderName,
  componentName,
}: ComponentInfo) => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    content: { control: { type: 'text' } },
    padded: { control: { type: 'boolean' } },
  },
  args: {
    content: `This is some content`,
    padded: false,
  },
});

export const SuperCardStories = (
  { folderName, componentName }: ComponentInfo,
  template: Story<SuperCardStoryAttrs>
) => {
  const Default = template.bind({});

  const Padded = template.bind({});
  Padded.args = { padded: true };

  return {
    Default,
    Padded,
    componentMeta: SuperCardMeta({ folderName, componentName }),
  };
};
