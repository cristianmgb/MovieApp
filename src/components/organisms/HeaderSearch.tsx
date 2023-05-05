import React from 'react';
import {Toolbar} from '../molecules/Toolbar';
import {Icon} from '../atoms/Icon';
import {useNavigation} from '@react-navigation/native';
import {InputSearch} from '../molecules/InputSearch';

export default function HeaderSearch() {
  const navigation = useNavigation();
  return (
    <>
      <Toolbar
        title="Search"
        action={() => {
          navigation.goBack();
        }}>
        <Icon source={require('../../assets/ic_info.png')} />
      </Toolbar>
      <InputSearch />
    </>
  );
}
