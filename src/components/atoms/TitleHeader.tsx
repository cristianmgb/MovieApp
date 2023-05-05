import {Text, StyleSheet} from 'react-native';
import React from 'react';

type props = {
  title: string;
};

export const TitleHeader = ({title}: props) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
