import { SuperMemoListProps } from '@wcl-core/types';
import { ComponentInfo } from './components';

export interface SuperMemoListStoryAttrs extends SuperMemoListProps {
  onDelete: () => void;
  onAdd: () => void;
}

export interface SuperMemoListStoriesDefinition<MetaType, StoryType> {
  componentMeta: MetaType;
  Default: StoryType;
}

export type SuperMemoListStoriesBuilder<MetaType, StoryType> = (
  compInfo: ComponentInfo,
  template: StoryType
) => SuperMemoListStoriesDefinition<MetaType, StoryType>;
