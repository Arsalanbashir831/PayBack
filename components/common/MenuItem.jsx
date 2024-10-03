import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MenuItem = ({ topText, bottomText, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.topText}>{topText}</Text>
      <Text style={styles.bottomText}>{bottomText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.22, // Adjust based on your needs
    aspectRatio: 1,
    backgroundColor: '#FFB800',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  topText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default MenuItem;