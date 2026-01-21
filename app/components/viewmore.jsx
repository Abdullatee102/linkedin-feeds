import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ViewMore = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>View More</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: '#007bff',
    fontWeight: 'bold',
  }
});

export { ViewMore };