import React, {useEffect} from 'react';
import HomeTemplate from '../templates/HomeTemplate';
import {useMovies} from '../../hooks/useMovies';
import {CarouselMovie} from '../organisms/CarouselMovie';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

const Home = () => {
  const getMoviesDB = useMovies();
  const {nowPlayingMovie, popularMovie, topRateMovie, upcomingMovie} =
    useSelector((state: RootState) => state);
  useEffect(() => {
    const getMovie = async () => {
      await getMoviesDB();
    };
    getMovie();
  }, []);

  return (
    <HomeTemplate>
      <CarouselMovie
        title="Popular"
        movies={popularMovie}
        width={190}
        height={300}
        space={0.5}
      />
      <CarouselMovie title="Now playing" movies={nowPlayingMovie} />
      <CarouselMovie title="Upcoming" movies={upcomingMovie} />
      <CarouselMovie title="Top rated" movies={topRateMovie} />
    </HomeTemplate>
  );
};

export default Home;
