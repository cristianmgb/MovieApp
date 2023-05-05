import React from 'react';
import Button from '../atoms/Button';
import ImageMovie from '../atoms/Image';
import {Movie} from '../../interfaces/Movie';
import {IMAGE_RESOURCE} from '../../api/ApiClient';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {onSetMovieId} from '../../store/feature/movieIdSlice';

type props = {
  item: Movie;
  width?: number;
  height?: number;
  space?: number;
};

export const ItemMovie = ({item, width, height, space}: props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToDetails = () => {
    dispatch(onSetMovieId({movieId: item.id}));
    navigation.navigate('Detail');
  };

  return (
    <Button action={goToDetails}>
      <ImageMovie
        source={`${IMAGE_RESOURCE}${item?.poster_path}`}
        height={height}
        width={width}
        space={space}
      />
    </Button>
  );
};
