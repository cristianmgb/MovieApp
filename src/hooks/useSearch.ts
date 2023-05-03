import {useDispatch} from 'react-redux';
import ApiClient, {BASE_URL, MOVIE, SEARCH} from '../api/ApiClient';
import {onSetSearchMovie} from '../store/feature/searchMovieSlice';

export const useSearch = () => {
  const dispatch = useDispatch();

  const searchMovie = async (word: string) => {
    const res = await ApiClient.get(
      `${BASE_URL}${SEARCH}${MOVIE}`,
      `&query=${word}`,
    );
    dispatch(onSetSearchMovie(res.results));
  };
  return searchMovie;
};
