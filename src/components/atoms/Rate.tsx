import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from './Icon';

type props = {
  rate: number;
};

export const Rate = ({rate}: props) => {
  return (
    <View style={styles.container}>
      <Icon source={require('../../assets/ic_start.png')} />
      <Text style={styles.rate}>{rate?.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 40, 54, 0.6)',
    borderRadius: 20,
    width: 80,
    height: 40,
    top: 250,
    right: 10,
  },
  rate: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FF8700',
  },
});
