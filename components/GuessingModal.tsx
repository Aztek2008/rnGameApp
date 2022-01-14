import React from 'react';
import {
  GestureResponderEvent,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './Card';
import ButtonBox from './ButtonBox';
import color from '../constants/color';

type Props = {
  confirmed: boolean;
  inputValue: number;
  setConfirmed: (event: GestureResponderEvent | boolean) => void;
  setMinNumber: (event: number) => void;
  setMaxNumber: (event: number) => void;
  setIsMutch: (event: boolean) => void;
  style: {[key: string]: string | number};
};

const GuessingModal = (props: Props) => {
  const {
    confirmed,
    inputValue,
    setConfirmed,
    setMinNumber,
    setMaxNumber,
    setIsMutch,
  } = props;

  const closeHandler = () => {
    setConfirmed(false);
  };

  const buttonsArr = [
    {title: 'Too Low', handler: setMinNumber},
    {
      title: 'Mutch!',
      handler: setIsMutch,
      style: {backgroundColor: color.accent},
    },
    {title: 'Too High', handler: setMaxNumber},
  ];

  const buttonBoxProps = {
    buttonsArr,
    style: styles.buttonBox,
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmed}
        onRequestClose={closeHandler}>
        <View style={styles.centeredView}>
          <Card style={styles.modalView}>
            <Text style={styles.modalText}>{inputValue}</Text>
            <ButtonBox {...buttonBoxProps} />
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '45%',
  },
  modalView: {
    width: 300,
    height: 400,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 22,
    textAlign: 'center',
  },
  numberSize: {
    fontSize: 48,
  },
  buttonBox: {
    justifyContent: 'center',
  },
});

export default GuessingModal;
