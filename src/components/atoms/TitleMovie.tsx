import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type props = {
  title: string;
};

export const TitleMovie = ({title}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 340,
    right: 16,
    width: 210,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: '#FFFFFF',
  },
});
