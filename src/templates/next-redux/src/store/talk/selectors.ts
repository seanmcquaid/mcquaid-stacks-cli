import { createSelector } from 'reselect';
import type { RootState } from '..';

export const selectTalkState = (state: RootState) => state.talk;

export const selectTalkLength = createSelector(
  selectTalkState,
  state => state.talkLength,
);

export const selectTalkCategory = createSelector(
  selectTalkState,
  state => state.talkCategory,
);

export const selectTopic = createSelector(
  selectTalkState,
  state => state.topic,
);

export const selectAbstract = createSelector(
  selectTalkState,
  state => state.abstract,
);