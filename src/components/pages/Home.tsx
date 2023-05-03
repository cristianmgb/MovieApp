import React, {useEffect} from 'react';
import {Text} from 'react-native';
import SimpleTemplate from '../templates/SimpleTemplate';
import {useMovies} from '../../hooks/useMovies';

const Home = () => {
  const getMoviesDB = useMovies();

  useEffect(() => {
    const getMovie = async () => {
      await getMoviesDB();
    };
    getMovie();
  }, [getMoviesDB]);

  return (
    <SimpleTemplate>
      <Text>Home</Text>
    </SimpleTemplate>
  );
};

export default Home;
