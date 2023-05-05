import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '../atoms/Icon';

type props = {
  source: any;
  width?: number;
  height?: number;
  action: Function;
};

export const BackButton = ({action, height, source, width}: props) => {
  return (
    <TouchableOpacity
      hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}
      onPress={() => action()}>
      <Icon source={source} height={height} width={width} />
    </TouchableOpacity>
  );
};
