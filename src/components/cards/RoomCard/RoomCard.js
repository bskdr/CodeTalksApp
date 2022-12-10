import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './RoomCard.style';

const RoomCard = ({room, navigation}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('RoomDetailPage', {room_id: room.id, room_name: room.name})}>
      <Text style={styles.title}>{room.name}</Text>
    </Pressable>
  );
};

export default RoomCard;
