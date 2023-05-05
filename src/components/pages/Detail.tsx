/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDetailMovie} from '../../hooks/useDetailMovie';
import Header from '../organisms/Header';
import {Description} from '../molecules/Description';
import {TabDetail} from '../organisms/TabDetails';
import DetailTemplate from '../templates/SimpleTemplate';

const Detail = () => {
  const detailMovie = useDetailMovie();

  useEffect(() => {
    detailMovie();
  }, []);

  return (
    <DetailTemplate>
      <Header />
      <Description />
      <TabDetail />
    </DetailTemplate>
  );
};

export default Detail;
