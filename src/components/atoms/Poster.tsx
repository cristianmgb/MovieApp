import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import ImageProgress from 'react-native-image-progress';

type props = {
  source: string;
  width?: number;
  height?: number;
  style?: ViewStyle;
};

const Poster = ({source, width, height, style}: props) => {
  return (
    <View style={[styles.container, style]}>
      <ImageProgress
        source={{uri: source}}
        imageStyle={styles.img}
        style={{width, height}}
      />
    </View>
  );
};

Poster.defaultProps = {
  width: 120,
  height: 180,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 230,
    left: 20,
  },
  img: {
    borderRadius: 16,
    resizeMode: 'stretch',
  },
});

export default Poster;
