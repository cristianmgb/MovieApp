import React, {ReactNode} from 'react';
import {View, ScrollView, StyleSheet, StatusBar, Text} from 'react-native';

type props = {
  children: ReactNode;
};

const HomeTemplate = ({children}: props) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#242A32" hidden={false} />
      <View style={styles.contentTitle}>
        <Text style={styles.title}>What do you want to watch?</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242A32',
    paddingRight: 16,
    paddingLeft: 16,
  },
  scroll: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 27,
    color: '#FFFFFF',
  },
  contentTitle: {
    marginTop: 15,
    marginBottom: 10,
  },
});

export default HomeTemplate;
