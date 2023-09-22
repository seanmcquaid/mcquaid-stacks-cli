import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  initialized: boolean;
}

export const initialState: AppState = {
  initialized: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialized: (state, action) => {
      state.initialized = action.payload;
    },
  },
});

export const { setInitialized } = appSlice.actions;

export default appSlice;
