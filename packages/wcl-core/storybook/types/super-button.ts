import { SuperButtonProps } from '@wcl-core/types';
import { ComponentInfo } from './components';

export interface SuperButtonStoryAttrs extends SuperButtonProps {
  content: string;
  icon: string;
  onClick: () => void;
}

export interface SuperButtonStoriesDefinition<MetaType, StoryType> {
  componentMeta: MetaType;
  Default: StoryType;
}

export type SuperButtonMetaBuilder<MetaType> = (
  compInfo: ComponentInfo
) => MetaType;

export type SuperButtonStoriesBuilder<MetaType, StoryType> = (
  compInfo: ComponentInfo,
  template: StoryType
) => SuperButtonStoriesDefinition<MetaType, StoryType>;
