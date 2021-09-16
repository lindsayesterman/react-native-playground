import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <StatusBar style="auto" />
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
