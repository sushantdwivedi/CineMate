import React, { FC } from 'react';
import { View, TextInput, StyleSheet, LayoutAnimation } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ value, onChangeText }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies..."
        placeholderTextColor="#999"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#fff',
  },
});

export default SearchBar;
