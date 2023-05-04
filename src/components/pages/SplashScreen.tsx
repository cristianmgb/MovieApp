import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const SplasScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/popcorn.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242A32',
    paddingRight: 16,
    paddingLeft: 16,
  },

  img: {
    width: 189,
    height: 189,
  },
});

export default SplasScreen;
