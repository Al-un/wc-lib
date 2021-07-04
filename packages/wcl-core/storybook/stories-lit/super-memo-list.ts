import { Story } from '@storybook/web-components';

import { SuperMemo, ComponentInfo } from '@wcl-core/types';

export interface SuperMemoListStoryAttrs {
  memos: SuperMemo[];
  onDelete: () => void;
  onAdd: () => void;
}

export const SuperMemoListMeta = ({
  folderName,
  componentName,
}: ComponentInfo) => ({
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

export const SuperMemoListStories = (
  { folderName, componentName }: ComponentInfo,
  template: Story<SuperMemoListStoryAttrs>
) => {
  const Default = template.bind({});

  return {
    Default,
    componentMeta: SuperMemoListMeta({ folderName, componentName }),
  };
};
