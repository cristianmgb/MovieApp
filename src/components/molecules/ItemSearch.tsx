import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Poster from '../atoms/Poster';
import {Movie} from '../../interfaces/Movie';
import {IMAGE_RESOURCE} from '../../api/ApiClient';
import Button from '../atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {onSetMovieId} from '../../store/feature/movieIdSlice';
import {Icon} from '../atoms/Icon';
import {trunc} from '../../utils/TruncString';

type props = {
  item: Movie;
};

export const ItemSearch = ({item}: props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToDetails = () => {
    dispatch(onSetMovieId({movieId: item.id}));
    navigation.navigate('Detail');
  };

  return (
    <Button action={goToDetails}>
      <View style={styles.container}>
        <View>
          <Poster
            style={styles.poster}
            source={`${IMAGE_RESOURCE}${item.poster_path}`}
          />
        </View>
        <View>
          <View style={styles.description}>
            <Text style={styles.title}>{trunc(item.title, 20)}</Text>
          </View>
          <View style={styles.description}>
            <View style={styles.section}>
              <Icon source={require('../../assets/ic_start.png')} />
              <Text style={styles.rate}>{item?.vote_average?.toFixed(1)}</Text>
            </View>
            <View style={styles.section}>
              <Icon source={require('../../assets/ic_calendar.png')} />
              <Text style={styles.text}>
                {item?.release_date?.split('-')[0]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  poster: {
    position: 'relative',
    top: 0,
    left: 0,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: 0.12,
    color: '#92929D',
    marginLeft: 4,
  },
  rate: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FF8700',
    marginLeft: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    marginLeft: 10,
  },
});
