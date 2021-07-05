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

  const LongMemo = template.bind({});
  LongMemo.args = {
    memo: {
      id: 123,
      title: 'This is some long time but not that long compared to the text',
      text:
        'Voluptatibus velit non labore voluptatum consequatur officia vel.' +
        'Autem tempore dolor voluptatem laborum. Suscipit ratione recusandae ' +
        'exercitationem suscipit autem. Quibusdam facere sit et sed id. Aut et ' +
        'quidem molestiae magni magnam quidem. Cum sed sunt odio sed qui porro ' +
        'sed assumenda. Culpa inventore qui cum aut id similique. Consectetur ' +
        'consequatur aliquid adipisci sed eos. Qui ea necessitatibus quod ' +
        'corrupti ipsam. Rem vel modi ea dolores omnis quos explicabo laborum. ' +
        'Maxime alias non laborum voluptatibus. Ut omnis autem harum aut aut ' +
        'quia nihil. Nihil sequi doloribus doloribus consequuntur accusantium' +
        ' sapiente. Amet ea dolorum omnis laudantium aperiam aut dolores. Non ' +
        'assumenda nostrum quo tenetur molestiae aliquam quia. Provident eos ' +
        'aut maxime. Laudantium tempora minima voluptas aliquam aut. Quaerat ' +
        'vel cum esse dolorem in ad quibusdam quisquam. Ut commodi ea rerum ' +
        'adipisci enim. Perspiciatis blanditiis mollitia rem et.',
    },
  };

  return {
    Default,
    LongMemo,
    componentMeta: SuperMemoItemMeta({ folderName, componentName }),
  };
};
