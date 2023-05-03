import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  movieId: 0,
};

export const movieIdSlice = createSlice({
  name: 'movieId',
  initialState,
  reducers: {
    onSetMovieId: (state, action: PayloadAction<Number>) => {
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
