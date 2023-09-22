import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';

const selectCounterReducerState = (state: RootState) => state.counter;

export const selectCounterValue = createSelector(
  selectCounterReducerState,
  state => state.value,
);
