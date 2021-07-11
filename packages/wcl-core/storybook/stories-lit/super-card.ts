import { Meta, Story } from '@storybook/web-components';

import {
  ComponentInfo,
  SuperCardStoriesBuilder,
  SuperCardStoryAttrs,
} from '../types';

export const SuperCardMeta = ({
  folderName,
  componentName,
}: ComponentInfo): Meta => ({
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

export const SuperCardStories: SuperCardStoriesBuilder<
  Meta,
  Story<SuperCardStoryAttrs>
> = (compInfo, template) => {
  const Default = template.bind({});

  const Padded = template.bind({});
  Padded.args = { padded: true };

  return {
    Default,
    Padded,
    componentMeta: SuperCardMeta(compInfo),
  };
};
