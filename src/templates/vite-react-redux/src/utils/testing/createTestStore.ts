import { configureStore } from '@reduxjs/toolkit';
import initialReduxState from './initialReduxState';
import type { RootState } from '@/store';
import persistedReducer from '@/store/persistedReducer';

const createTestStore = (state: Partial<RootState> = {}) => {
  const preloadedState = {
    ...initialReduxState,
    ...state,
  };

  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
  });
};

export default createTestStore;
