import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createMigrate from 'redux-persist/es/createMigrate';
import counterSlice from './counter/slice';
import appSlice, { initialState as appInitialState } from './app/slice';
import postsApi from './postsApi';
import AppConstants from '@/constants/AppConstants';

const persistConfig = {
  key: 'root',
  storage,
  // If you'd like to persist an entire reducer, you can include the name here
  whitelist: [counterSlice.name],
  // If you'd like to not save a specific reducer, you can include it here to blacklist it or just leave it out from the persist config
  // If you'd like to only save specific parts of a reducer, you can create an individual persist config for the blacklisted reducer
  blacklist: [appSlice.name],
};

const appPersistConfig = {
  key: appSlice.name,
  storage,
  blacklist: ['initialized'],
  version: AppConstants.REDUX_STORE_VERSION,
  migrate: createMigrate({
    [AppConstants.REDUX_STORE_VERSION]: () => ({
      ...appInitialState,
      _persist: {
        rehydrated: false,
        version: AppConstants.REDUX_STORE_VERSION,
      },
    }),
  }),
};

const persistedReducers = {
  [counterSlice.name]: counterSlice.reducer,
  [appSlice.name]: persistReducer(appPersistConfig, appSlice.reducer),
};

const unpersistedReducers = {
  [postsApi.reducerPath]: postsApi.reducer,
};

const rootReducer = combineReducers({
  ...persistedReducers,
  ...unpersistedReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
