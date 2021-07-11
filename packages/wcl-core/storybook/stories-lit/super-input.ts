import { Meta, Story } from '@storybook/web-components';

import {
  ComponentInfo,
  SuperInputStoriesBuilder,
  SuperInputStoryAttrs,
} from '../types';

export const SuperInputMeta = ({
  folderName,
  componentName,
}: ComponentInfo): Meta => ({
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

export const SuperInputStories: SuperInputStoriesBuilder<
  Meta,
  Story<SuperInputStoryAttrs>
> = (compInfo, template) => {
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
    componentMeta: SuperInputMeta(compInfo),
  };
};
