import React from 'react';
import {Alert, Modal, StyleSheet, Text, View} from 'react-native';
import color from '../constants/color';
import ButtonBox from './ButtonBox';
import Card from './Card';

type Props = {
  confirmed: boolean;
  setConfirmed: (arg0: boolean) => void;
  confirmedNumber?: number;
  finalConfirmHandler?: () => void;
  resetHandler?: () => void;
};

const DesigionModal = (props: Props) => {
  const {
    confirmed,
    setConfirmed,
    confirmedNumber,
    finalConfirmHandler,
    resetHandler,
  } = props;

  const buttonsArr = [
    {
      title: 'Start Game',
      handler: finalConfirmHandler,
      style: {backgroundColor: color.accent},
    },
    {title: 'Another Number', handler: resetHandler},
  ];

  const buttonBoxProps = {
    buttonsArr,
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmed}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setConfirmed(false);
        }}>
        <View style={styles.centeredView}>
          <Card style={styles.modalView}>
            <Text style={styles.modalText}>Choosen number:</Text>
            <View>
              <Text style={styles.numberSize}>{confirmedNumber}</Text>
            </View>
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
  },
  numberSize: {
    fontSize: 48,
  },
});

export default DesigionModal;
