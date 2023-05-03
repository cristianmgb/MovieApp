import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../interfaces/Movie';

const initialState: Movie[] = [];

export const searchMovieSlice = createSlice({
  name: 'searchMovie',
  initialState,
  reducers: {
    onSetSearchMovie: (state, action: PayloadAction<Movie[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetSearchMovie} = searchMovieSlice.actions;

export default searchMovieSlice.reducer;
