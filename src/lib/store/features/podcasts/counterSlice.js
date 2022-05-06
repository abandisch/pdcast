import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MOCK_PODCAST} from '../../../api/mockdata';

export interface PodcastsState {
  current: typeof MOCK_PODCAST | null;
}

const initialState: PodcastsState = {
  current: null,
};

// TODO: add async thunk to do API request to get mock podcast and show the details
// on the screen

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {},
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = podcastsSlice.actions;

export default podcastsSlice.reducer;
