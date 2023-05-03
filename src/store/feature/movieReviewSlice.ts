import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Review} from '../../interfaces/Review';

const initialState: Review[] = [];

export const movieReviewSlice = createSlice({
  name: 'movieReview',
  initialState,
  reducers: {
    onSetMovieReview: (state, action: PayloadAction<Review[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetMovieReview} = movieReviewSlice.actions;

export default movieReviewSlice.reducer;
