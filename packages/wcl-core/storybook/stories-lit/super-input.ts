import { Story } from '@storybook/web-components';

import { ComponentInfo } from '@wcl-core/types';

export interface SuperInputStoryAttrs {
  label?: string;
  value?: string;
  onInput: () => void;
}

export const SuperInputMeta = ({
  folderName,
  componentName,
}: ComponentInfo) => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    label: { content: 'text' },
    value: { content: 'text' },
    onInput: { action: 'onInput' },
  },
  args: {
    label: `Some label`,
    value: `Some value`,
  },
});

export const SuperInputStories = (
  { folderName, componentName }: ComponentInfo,
  template: Story<SuperInputStoryAttrs>
) => {
  const Default = template.bind({});

  return {
    Default,
    componentMeta: SuperInputMeta({ folderName, componentName }),
  };
};
