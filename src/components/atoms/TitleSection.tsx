import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type props = {
  title?: string;
};

export const TitleSection = ({title}: props) => {
  return (
    <>
      {title ? (
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.divider} />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0.9,
    color: '#FFFFFF',
  },
  divider: {
    width: 84,
    height: 4,
    backgroundColor: '#3A3F47',
    marginTop: 3,
  },
});
