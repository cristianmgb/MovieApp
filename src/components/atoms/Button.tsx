import React, {ReactNode} from 'react';
import {Pressable} from 'react-native';

type props = {
  children: ReactNode;
  action: Function;
};

const Button = ({children, action}: props) => {
  return <Pressable onPress={() => action()}>{children}</Pressable>;
};

export default Button;
