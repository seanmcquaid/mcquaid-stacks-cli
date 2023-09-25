import type TalkLengths from '@/constants/TalkLengths';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { z } from 'zod';
import type TalkCategories from '@/constants/TalkCategories';

export interface TalkState {
  talkCategory: z.infer<typeof TalkCategories>;
  talkLength: z.infer<typeof TalkLengths>;
  topic: string;
  abstract: string;
}

const initialState: TalkState = {
  talkCategory: 'Software Engineering',
  talkLength: 30,
  topic: '',
  abstract: '',
};

export const talkSlice = createSlice({
  name: 'talk',
  initialState,
  reducers: {
    setTalkCategory: (
      state,
      action: PayloadAction<z.infer<typeof TalkCategories>>,
    ) => {
      state.talkCategory = action.payload;
    },
    setTopic: (state, action: PayloadAction<string>) => {
      state.topic = action.payload;
    },
    setTalkLength: (
      state,
      action: PayloadAction<z.infer<typeof TalkLengths>>,
    ) => {
      state.talkLength = action.payload;
    },
    setAbstract: (state, action: PayloadAction<string>) => {
      state.abstract = action.payload;
    },
  },
});

export const { setTalkLength, setTopic, setAbstract } = talkSlice.actions;

export default talkSlice;
