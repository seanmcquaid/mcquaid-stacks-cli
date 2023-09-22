import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';

const selectAppReducerState = (state: RootState) => state.app;

export const selectAppInitialized = createSelector(
  selectAppReducerState,
  state => state.initialized,
);
