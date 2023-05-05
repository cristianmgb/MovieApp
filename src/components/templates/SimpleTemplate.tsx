import React, {ReactNode} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

type props = {
  children: ReactNode;
};

const DetailTemplate = ({children}: props) => {
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
    backgroundColor: '#242A32',
  },
});

export default DetailTemplate;
