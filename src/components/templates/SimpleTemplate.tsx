import React, {ReactNode} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

type props = {
  children: ReactNode;
};

const SimpleTemplate = ({children}: props) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#242A32" hidden={false} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242A32',
  },
});

export default SimpleTemplate;
