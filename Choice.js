import React from 'react';
import { TextInput } from 'react-native';

export default function Choice(props) {
    return (
      <TextInput style={{backgroundColor:"#ccc", margin: 10}} placeholder={props.choiceOption}>
      </TextInput>
    );
  }