import React from 'react';
import {  Text, View } from 'react-native';

export default function Question(props) {
    return (
      <View>
        <Text>{props.formQuestion}</Text>
      </View>
    );
  }