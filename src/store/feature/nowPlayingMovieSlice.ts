import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../interfaces/Movie';

const initialState: Movie[] = [];

export const nowPlayingMovieSlice = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {
    onSetNowPlayingMovie: (state, action: PayloadAction<Movie[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetNowPlayingMovie} = nowPlayingMovieSlice.actions;

export default nowPlayingMovieSlice.reducer;
