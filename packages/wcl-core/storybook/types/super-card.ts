import { SuperCardProps } from '@wcl-core/types';
import { ComponentInfo } from './components';

export interface SuperCardStoryAttrs extends SuperCardProps {
  content?: string;
}

export interface SuperCardStoriesDefinition<MetaType, StoryType> {
  componentMeta: MetaType;
  Default: StoryType;
  Padded: StoryType;
}

export type SuperCardStoriesBuilder<MetaType, StoryType> = (
  compInfo: ComponentInfo,
  template: StoryType
) => SuperCardStoriesDefinition<MetaType, StoryType>;
