import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../../interfaces/Movie';

const initialState: Movie[] = [];

export const upcomingMovieSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {
    onSetUpcomingMovie: (state, action: PayloadAction<Movie[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetUpcomingMovie} = upcomingMovieSlice.actions;

export default upcomingMovieSlice.reducer;
