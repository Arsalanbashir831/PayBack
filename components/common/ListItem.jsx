import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ title, price, variant = 'yellow' }) => {
  return (
    <View style={[
      styles.container,
      variant === 'dark' ? styles.darkContainer : styles.yellowContainer
    ]}>
      <Text style={[
        styles.title,
        variant === 'dark' ? styles.darkTitle : styles.yellowTitle
      ]}>
        {title}
      </Text>
      <Text style={[
        styles.price,
        variant === 'dark' ? styles.darkPrice : styles.yellowPrice
      ]}>
        Rs. {price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  yellowContainer: {
    backgroundColor: '#FFB800',
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
  },
  yellowTitle: {
    color: 'black',
  },
  darkTitle: {
    color: '#FFB800',
  },
  yellowPrice: {
    color: 'black',
  },
  darkPrice: {
    color: 'white',
  },
});

export default ListItem;