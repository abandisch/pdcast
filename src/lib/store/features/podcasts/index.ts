import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {MOCK_PODCAST} from '../../../api/mockdata';
import {getPodcast} from '../../../api/index';

export interface PodcastsState {
  current: typeof MOCK_PODCAST | null;
  api: {
    status: 'idle' | 'loading' | 'error';
    error: string | null;
  };
}

const initialState: PodcastsState = {
  current: null,
  api: {
    status: 'idle',
    error: null,
  },
};

export const fetchPodcast = createAsyncThunk(
  'podcasts/fetchPodcast',
  async (url: string) => {
    const response = await getPodcast(url);
    return response.data;
  },
);

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPodcast.pending, state => {
      state.api.status = 'loading';
      state.api.error = null;
    });
    builder.addCase(fetchPodcast.fulfilled, (state, action) => {
      state.api.status = 'idle';
      state.api.error = null;
      state.current = action.payload.podcast;
    });
    builder.addCase(fetchPodcast.rejected, (state, action) => {
      state.api.status = 'error';
      state.api.error = action.error.message as string;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = podcastsSlice.actions;

export default podcastsSlice.reducer;
