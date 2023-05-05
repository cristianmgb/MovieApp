import React from 'react';
import {IMAGE_RESOURCE} from '../../api/ApiClient';
import {Toolbar} from '../molecules/Toolbar';
import {Icon} from '../atoms/Icon';
import {BackdropImage} from '../atoms/BackdropImage';
import {Rate} from '../atoms/Rate';
import Poster from '../atoms/Poster';
import {TitleMovie} from '../atoms/TitleMovie';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export default function Header() {
  const navigation = useNavigation();
  const detail = useSelector((state: RootState) => state.movieDetail);
  return (
    <>
      <Toolbar
        title="Detail"
        action={() => {
          navigation.goBack();
        }}>
        <Icon source={require('../../assets/ic_top_bar.png')} />
      </Toolbar>
      <BackdropImage source={`${IMAGE_RESOURCE}${detail.backdrop_path}`} />
      <Rate rate={detail.vote_average} />
      <Poster source={`${IMAGE_RESOURCE}${detail.poster_path}`} />
      <TitleMovie title={detail.original_title} />
    </>
  );
}
