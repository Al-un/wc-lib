import { Meta, Story } from '@storybook/web-components';

import {
  ComponentInfo,
  SuperMemoListStoriesBuilder,
  SuperMemoListStoryAttrs,
} from '../types';

export const SuperMemoListMeta = ({
  folderName,
  componentName,
}: ComponentInfo): Meta => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    memos: { control: 'object' },
    onDelete: { action: 'onDelete' },
    onAdd: { action: 'onAdd' },
  },
  args: {
    memos: [
      { id: 1, title: 'Some title', text: 'First memo' },
      { id: 2, title: 'Some title', text: 'Second memo' },
    ],
  },
});

export const SuperMemoListStories: SuperMemoListStoriesBuilder<
  Meta,
  Story<SuperMemoListStoryAttrs>
> = (compInfo, template) => {
  const Default = template.bind({});

  return {
    Default,
    componentMeta: SuperMemoListMeta(compInfo),
  };
};
