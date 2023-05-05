import React from 'react';
import {View} from 'react-native';
import {ItemMovie} from '../molecules/ItemMovie';
import {Movie} from '../../interfaces/Movie';
import {TitleSection} from '../atoms/TitleSection';
import {FlashList} from '@shopify/flash-list';

type props = {
  movies: Movie[];
  width?: number;
  height?: number;
  space?: number;
  title?: string;
};

export const CarouselMovie = ({movies, height, width, space, title}: props) => {
  return (
    <View>
      <TitleSection title={title} />
      {movies.length > 0 ? (
        <FlashList
          data={movies}
          renderItem={({item}) => (
            <ItemMovie
              item={item}
              height={height}
              width={width}
              space={space}
            />
          )}
          estimatedItemSize={200}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};
