import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import styles from './InputModal.style';
import Button from '../../Button';

const InputModal = ({visible, placeholder, buttonTitle, onClose, onAdd}) => {
  const [text, setText] = useState(null);

  const handleAdd = () => {
    if (!text) {
      return;
    }

    onAdd(text);
    setText(null);
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text={buttonTitle} onPress={handleAdd} />
      </View>
    </Modal>
  );
};

export default InputModal;
