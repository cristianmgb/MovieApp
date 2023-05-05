import {useDispatch, useSelector} from 'react-redux';
import ApiClient, {BASE_URL, CAST, MOVIE, REVIEWS} from '../api/ApiClient';
import {onSetMovieCast} from '../store/feature/movieCastSlice';
import {RootState} from '../store/store';
import {onSetmovieDetail} from '../store/feature/movieDetailSlice';
import {onSetMovieReview} from '../store/feature/movieReviewSlice';

export const useDetailMovie = () => {
  const dispatch = useDispatch();
  const {movieId} = useSelector((state: RootState) => state.movieId);

  const detailMovie = async () => {
    const detail = await ApiClient.get(`${BASE_URL}${MOVIE}/${movieId}`);
    dispatch(onSetmovieDetail(detail));

    const credits = await ApiClient.get(
      `${BASE_URL}${MOVIE}/${movieId}${CAST}`,
    );
    dispatch(onSetMovieCast(credits.cast));

    const reviews = await ApiClient.get(
      `${BASE_URL}${MOVIE}/${movieId}${REVIEWS}`,
    );
    dispatch(onSetMovieReview(reviews.results));
  };

  return detailMovie;
};
