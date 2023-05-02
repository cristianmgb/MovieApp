import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

type props = {
  source: any;
  color: string;
  title: string;
};
const ItemBottomTab = ({source, color, title}: props) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        alt="Home"
        style={[{tintColor: color}, styles.size]}
      />
      <Text style={{color}}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 21,
    height: 24,
  },
});

//make this component available to the app
export default ItemBottomTab;
