import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {ItemSearch} from '../molecules/ItemSearch';

export const ResultSearch = () => {
  const result = useSelector((state: RootState) => state.searchMovie);
  return (
    <View>
      {result.length > 0 ? (
        <FlatList
          data={result}
          renderItem={({item}) => <ItemSearch item={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};
