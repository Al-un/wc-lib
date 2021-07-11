import { SuperMemoItemProps } from '@wcl-core/types';
import { ComponentInfo } from './components';

export interface SuperMemoItemStoryAttrs extends SuperMemoItemProps {
  onDelete: () => void;
}

export interface SuperMemoItemStoriesDefinition<MetaType, StoryType> {
  componentMeta: MetaType;
  Default: StoryType;
  LongMemo: StoryType;
}

export type SuperMemoItemStoriesBuilder<MetaType, StoryType> = (
  compInfo: ComponentInfo,
  template: StoryType
) => SuperMemoItemStoriesDefinition<MetaType, StoryType>;
