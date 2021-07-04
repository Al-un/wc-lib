import { Story } from '@storybook/web-components';

import { SuperMemo, ComponentInfo } from '@wcl-core/types';

export interface SuperMemoItemStoryAttrs {
  memo: SuperMemo;
  onDelete: () => void;
}

export const SuperMemoItemMeta = ({
  folderName,
  componentName,
}: ComponentInfo) => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    memo: { control: 'object' },
    onDelete: { action: 'onDelete' },
  },
  args: {
    memo: { id: 123, title: 'Some title', text: 'Some memo' },
  },
});

export const SuperMemoItemStories = (
  { folderName, componentName }: ComponentInfo,
  template: Story<SuperMemoItemStoryAttrs>
) => {
  const Default = template.bind({});

  return {
    Default,
    componentMeta: SuperMemoItemMeta({ folderName, componentName }),
  };
};
