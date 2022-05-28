import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./styles";

export default function App() {
  return (
  <View style={styles.container}>
  <View style={styles.box}>
  <Text style={styles.boxText}>I'm in a box</Text>
  </View>
  </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
