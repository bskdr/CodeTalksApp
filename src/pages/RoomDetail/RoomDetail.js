import {View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import MessageCard from '../../components/cards/MessageCard';
import styles from './RoomDetail.style';
import FloatingButton from '../../components/FloatingButton';
import InputModal from '../../components/modals/InputModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import dataParser from '../../utils/dataParser';
import ListHeader from '../../components/ListHeader';

const RoomDetail = ({route}) => {
  const {room_id, room_name} = route.params;
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    database()
      .ref(`rooms/${room_id}/messages/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = dataParser(contentData || {});
        setMessageList(parsedData);
      });
  }, []);

  const handleInputModalToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleAdd = content => {
    handleInputModalToggle();
    sendMessage(content);
  };

  const sendMessage = content => {
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref(`/rooms/${room_id}/messages/`).push(contentObject);
  };

  const renderMessage = ({item}) => <MessageCard message={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={messageList}
        renderItem={renderMessage}
        ListHeaderComponent={() => <ListHeader roomName={room_name} />}
      />
      <InputModal
        visible={inputModalVisible}
        onClose={handleInputModalToggle}
        onAdd={handleAdd}
        placeholder="Mesajın..."
        buttonTitle="Gönder"
      />
      <FloatingButton
        onPress={handleInputModalToggle}
        iconName="plus"
        theme="secondary"
      />
    </View>
  );
};

export default RoomDetail;
