import { SuperMemo } from './models';

export interface SuperMemoListProps {
  _memoTitle: string;
  _memoText: string;
  memos: SuperMemo[];
  title: string;
}
