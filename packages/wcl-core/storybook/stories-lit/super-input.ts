import { Story } from '@storybook/web-components';

import { ComponentInfo } from '@wcl-core/types';

export interface SuperInputStoryAttrs {
  label?: string;
  value?: string | number;
  type?: string;
  onInput: () => void;
}

export const SuperInputMeta = ({
  folderName,
  componentName,
}: ComponentInfo) => ({
  title: `WebComp/components/${folderName}/${componentName}`,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'textarea', 'password'],
    },
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

  const InputText = template.bind({});
  InputText.args = { type: 'text', value: 'some text' };

  const InputNumber = template.bind({});
  InputNumber.args = { type: 'number', value: 123 };
  InputNumber.argTypes = {
    value: { control: 'number' },
  };

  const InputPassword = template.bind({});
  InputPassword.args = { type: 'password', value: 'some secret' };

  const InputTextArea = template.bind({});
  InputTextArea.args = { type: 'textarea', value: 'A super long text' };

  return {
    Default,
    InputText,
    InputNumber,
    InputPassword,
    InputTextArea,
    componentMeta: SuperInputMeta({ folderName, componentName }),
  };
};
