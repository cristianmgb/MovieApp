import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import ImageProgress from 'react-native-image-progress';

type props = {
  source: any;
  width?: number;
  height?: number;
};

const w = Dimensions.get('window').width;

export const BackdropImage = ({source, width, height}: props) => {
  return (
    <ImageProgress
      source={{uri: source}}
      imageStyle={styles.backdrop}
      style={{width, height}}
    />
  );
};

BackdropImage.defaultProps = {
  width: w,
  height: 260,
};

const styles = StyleSheet.create({
  backdrop: {
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    resizeMode: 'cover',
  },
});
