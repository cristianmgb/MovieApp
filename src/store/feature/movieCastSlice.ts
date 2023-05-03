import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Cast} from '../../interfaces/Cast';

const initialState: Cast[] = [];

export const movieCastSlice = createSlice({
  name: 'movieCast',
  initialState,
  reducers: {
    onSetMovieCast: (state, action: PayloadAction<Cast[]>) => {
      return [...state, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetMovieCast} = movieCastSlice.actions;

export default movieCastSlice.reducer;
