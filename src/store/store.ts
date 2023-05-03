import {configureStore} from '@reduxjs/toolkit';
import PopularMovieReducer from './feature/popularMovieSlice';
import TopRatedMovieReducer from './feature/topRatedMovieSlice';
import UpcomingMovieReducer from './feature/upcomingMovieSlice';
import NowPlayingMovieReducer from './feature/nowPlayingMovieSlice';
import MovieIdReducer from './feature/movieIdSlice';
import MovieCastReducer from './feature/movieCastSlice';
import MovieReviewReducer from './feature/movieReviewSlice';

export const store = configureStore({
  reducer: {
    popularMovie: PopularMovieReducer,
    topRateMovie: TopRatedMovieReducer,
    upcomingMovie: UpcomingMovieReducer,
    nowPlayingMovie: NowPlayingMovieReducer,
    movieId: MovieIdReducer,
    movieCast: MovieCastReducer,
    movieReview: MovieReviewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
