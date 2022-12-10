import {View, Text} from 'react-native';
import React from 'react';
import styles from './ListHeader.style';

const ListHeader = ({roomName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{roomName} odası kuruldu</Text>
    </View>
  );
};

export default ListHeader;
