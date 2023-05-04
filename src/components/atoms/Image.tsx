import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import ImageProgress from 'react-native-image-progress';

type props = {
  source: string;
  width: number;
  height: number;
  space: number;
};

const ImageMovie = ({source, width, height, space}: props) => {
  const w = Dimensions.get('window').width;
  return (
    <View style={{width: w * space}}>
      <ImageProgress
        source={{uri: source}}
        imageStyle={styles.img}
        style={{width, height}}
      />
    </View>
  );
};

ImageMovie.defaultProps = {
  width: 120,
  height: 200,
  space: 0.33,
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 16,
    resizeMode: 'stretch',
  },
});

export default ImageMovie;
