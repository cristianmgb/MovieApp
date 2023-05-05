import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {MovieDetail} from '../../interfaces/MovieDetail';

const initialState: MovieDetail = {} as MovieDetail;

export const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    onSetmovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      return {...state, ...action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {onSetmovieDetail} = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
