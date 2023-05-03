import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../interfaces/Movie';

const initialState: Movie[] = [];

export const popularMovieSlice = createSlice({
  name: 'popularMovie',
  initialState,
  reducers: {
    onSetPopularMovie: (state, action: PayloadAction<Movie[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetPopularMovie} = popularMovieSlice.actions;

export default popularMovieSlice.reducer;
