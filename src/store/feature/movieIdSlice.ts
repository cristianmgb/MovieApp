import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type MovieId = {
  movieId: number;
};

const initialState: MovieId = {
  movieId: 0,
};

export const movieIdSlice = createSlice({
  name: 'movieId',
  initialState,
  reducers: {
    onSetMovieId: (state, action: PayloadAction<MovieId>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetMovieId} = movieIdSlice.actions;

export default movieIdSlice.reducer;
