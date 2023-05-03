import {useDispatch} from 'react-redux';
import ApiClient, {
  BASE_URL,
  MOVIE,
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
  UPCOMING,
} from '../api/ApiClient';
import {onSetPopularMovie} from '../store/feature/popularMovieSlice';
import {onSetNowPlayingMovie} from '../store/feature/nowPlayingMovieSlice';
import {onSetUpcomingMovie} from '../store/feature/upcomingMovieSlice';
import {onSetTopRatedMovie} from '../store/feature/topRatedMovieSlice';

export const useMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const popular = await ApiClient.get(`${BASE_URL}${MOVIE}${POPULAR}`);
    dispatch(onSetPopularMovie(popular.results));

    const nowPlaying = await ApiClient.get(`${BASE_URL}${MOVIE}${NOW_PLAYING}`);
    dispatch(onSetNowPlayingMovie(nowPlaying.results));

    const upcoming = await ApiClient.get(`${BASE_URL}${MOVIE}${UPCOMING}`);
    dispatch(onSetUpcomingMovie(upcoming.results));

    const topRated = await ApiClient.get(`${BASE_URL}${MOVIE}${TOP_RATED}`);
    dispatch(onSetTopRatedMovie(topRated.results));
  };

  return getMovies;
};
