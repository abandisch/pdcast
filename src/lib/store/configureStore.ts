import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import podcastReducer from './features/podcasts';
// import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    podcasts: podcastReducer,
  },
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware().concat(logger);
    }
    return getDefaultMiddleware();
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
