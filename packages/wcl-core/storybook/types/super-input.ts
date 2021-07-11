import { SuperInputProps } from '@wcl-core/types';
import { ComponentInfo } from './components';

export interface SuperInputStoryAttrs extends SuperInputProps {
  onInput: () => void;
}

export interface SuperInputStoriesDefinition<MetaType, StoryType> {
  componentMeta: MetaType;
  Default: StoryType;
  InputText: StoryType;
  InputNumber: StoryType;
  InputPassword: StoryType;
  InputTextArea: StoryType;
}

export type SuperInputStoriesBuilder<MetaType, StoryType> = (
  compInfo: ComponentInfo,
  template: StoryType
) => SuperInputStoriesDefinition<MetaType, StoryType>;
