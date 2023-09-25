import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';

const selectAppState = (state: RootState) => state.app;

export const selectIsInitialized = createSelector(
  selectAppState,
  state => state.isInitialized,
);
