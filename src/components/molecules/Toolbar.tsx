import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {BackButton} from './BackButton';
import {TitleHeader} from '../atoms/TitleHeader';

type props = {
  action: Function;
  children?: ReactNode;
  title: string;
};

export const Toolbar = ({children, action, title}: props) => {
  return (
    <View style={styles.container}>
      <BackButton
        action={action}
        source={require('../../assets/ic_arrow_left.png')}
      />
      <TitleHeader title={title} />
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
