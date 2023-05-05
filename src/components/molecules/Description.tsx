import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '../atoms/Icon';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export const Description = () => {
  const detail = useSelector((state: RootState) => state.movieDetail);
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Icon source={require('../../assets/ic_calendar.png')} />
        <Text style={styles.text}>{detail?.release_date?.split('-')[0]}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Icon source={require('../../assets/ic_clock.png')} />
        <Text style={styles.text}>{detail?.runtime} Minutes</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Icon source={require('../../assets/ic_ticket.png')} />
        <Text style={styles.text}>
          {detail?.genres ? detail?.genres[0]?.name : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 16,
    backgroundColor: '#696974',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: 0.12,
    color: '#92929D',
    marginLeft: 2,
  },
});
