import React from 'react';
import {Image, StyleSheet} from 'react-native';
import SimpleTemplate from '../templates/SimpleTemplate';

const SplasScreen = () => {
  return (
    <SimpleTemplate>
      <Image style={styles.img} source={require('../../assets/popcorn.png')} />
    </SimpleTemplate>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 189,
    height: 189,
  },
});

export default SplasScreen;
