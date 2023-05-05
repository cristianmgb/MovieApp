/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import SimpleTemplate from '../templates/SimpleTemplate';
import {Toolbar} from '../molecules/Toolbar';
import {useNavigation} from '@react-navigation/native';
import {Image, View} from 'react-native';

const WatchList = () => {
  const navigation = useNavigation();
  return (
    <SimpleTemplate>
      <Toolbar action={() => navigation.goBack()} title="Watch list" />
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <Image
          source={require('../../assets/empty_wishlist.png')}
          style={{width: 300, height: 250, resizeMode: 'contain'}}
        />
      </View>
    </SimpleTemplate>
  );
};

export default WatchList;
