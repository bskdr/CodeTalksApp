import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FloatingButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress, iconName, theme = 'primary'}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress}>
      <Icon name={iconName} color="white" size={30} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
