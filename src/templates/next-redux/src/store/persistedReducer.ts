import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import talksApi from './talksApi';
import appSlice from './app/slice';
import talkSlice from './talk/slice';

const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [talksApi.reducerPath]: talksApi.reducer,
  [talkSlice.name]: talkSlice.reducer,
});

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: unknown) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const persistConfig = {
  key: 'root',
  storage:
    typeof window !== 'undefined'
      ? createWebStorage('local')
      : createNoopStorage(),
  blacklist: ['app', 'talksApi'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
