import React from 'react';
import { TouchableOpacity, Text, StyleSheet, LayoutAnimation } from 'react-native';

type Props = {
  isFavorite: boolean;
  onToggle: () => void;
};

const FavoriteButton = ({ isFavorite, onToggle }: Props) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  return (
    <TouchableOpacity style={styles.button} onPress={onToggle}>
      <Text style={styles.text}>
        {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C30228',
    padding: 12,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default FavoriteButton;
