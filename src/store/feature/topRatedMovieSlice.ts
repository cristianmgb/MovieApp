import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../interfaces/Movie';

const initialState: Movie[] = [];

export const topRatedMovieSlice = createSlice({
  name: 'topRated',
  initialState,
  reducers: {
    onSetTopRatedMovie: (state, action: PayloadAction<Movie[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetTopRatedMovie} = topRatedMovieSlice.actions;

export default topRatedMovieSlice.reducer;
