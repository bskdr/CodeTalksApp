import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Rooms.style';
import RoomCard from '../../components/cards/RoomCard';
import FloatingButton from '../../components/FloatingButton';
import InputModal from '../../components/modals/InputModal';
import database from '@react-native-firebase/database';
import dataParser from '../../utils/dataParser';

const Rooms = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    database()
      .ref('/rooms/')
      .on('value', snapshot => {
        const roomData = snapshot.val();

        const parsedData = dataParser(roomData || {});
        setRoomList(parsedData);
      });
  }, []);

  const handleInputModalToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleAdd = roomName => {
    handleInputModalToggle();
    addRoom(roomName);
  };

  const addRoom = roomName => {
    database().ref('/rooms/').push({name: roomName});
  };

  const renderRoom = ({item}) => (
    <RoomCard room={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={roomList} renderItem={renderRoom} numColumns={2} />
      <InputModal
        visible={inputModalVisible}
        onClose={handleInputModalToggle}
        onAdd={handleAdd}
        placeholder="Oda adı..."
        buttonTitle="Ekle"
      />
      <FloatingButton iconName="plus" onPress={handleInputModalToggle} />
    </View>
  );
};

export default Rooms;
