import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/base';
import {Cast} from '../../interfaces/Cast';

type props = {
  item: Cast;
};

export const ItemCast = ({item}: props) => {
  return (
    <View style={styles.container}>
      <Avatar source={require('../../assets/avatar.png')} size={100} />
      <Text style={styles.rating}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 25,
  },

  rating: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0296E5',
    marginTop: 15,
  },
});
