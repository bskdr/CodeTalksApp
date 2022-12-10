import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeholder, onType, value, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        style={styles.input}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        placeholderTextColor="white"
      />
    </View>
  );
};

export default Input;
