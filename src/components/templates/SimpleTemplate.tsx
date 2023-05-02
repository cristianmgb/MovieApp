import React, {ReactNode} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

type props = {
  children: ReactNode;
};

const SimpleTemplate = ({children}: props) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#1E1E1E" hidden={false} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
});

//make this component available to the app
export default SimpleTemplate;
