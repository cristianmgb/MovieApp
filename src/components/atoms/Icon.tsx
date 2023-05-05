import {Image, StyleSheet} from 'react-native';
import React from 'react';

type props = {
  source: any;
  width?: number;
  height?: number;
};

export const Icon = ({source, width, height}: props) => {
  return <Image source={source} style={[{width, height}, styles.icon]} />;
};

Icon.defaultProps = {
  width: 24,
  height: 24,
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
  },
});
