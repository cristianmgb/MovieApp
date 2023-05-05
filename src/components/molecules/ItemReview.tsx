import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/base';
import {Review} from '../../interfaces/Review';

type props = {
  item: Review;
};

export const ItemReview = ({item}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentAvatar}>
        <Avatar source={require('../../assets/avatar.png')} size={60} />
        <Text style={styles.rating}>{item.author_details.rating}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textAuthor}>
          {item.author}
          {'\n'}
        </Text>
        <Text style={styles.textContent}>{item.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 25,
  },
  contentAvatar: {
    alignItems: 'center',
  },
  content: {
    paddingLeft: 16,
    paddingRight: 30,
  },
  rating: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0296E5',
    marginTop: 15,
  },
  textAuthor: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: '#FFFFFF',
  },
  textContent: {
    fontSize: 12,
    lineHeight: 15,
    color: '#FFFFFF',
  },
});
