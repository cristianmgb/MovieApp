import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useSearch} from '../../hooks/useSearch';

export const InputSearch = () => {
  const [input, setInput] = useState('');
  const serch = useSearch();
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => {
          setInput(text);
          serch(input);
        }}
        value={input}
        style={styles.input}
        placeholder="Search movies"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#67686D',
    borderRadius: 10,
  },
});
