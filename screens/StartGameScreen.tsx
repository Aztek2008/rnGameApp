import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from 'react-native';
import ButtonBox from '../components/ButtonBox';
import Card from '../components/Card';
import DesigionModal from '../components/DesigionModal';
import Input from '../components/Input';
import {RootStackParamList} from '../components/ScreenSection';
import color from '../constants/color';

import {useAppSelector, useAppDispatch} from '../hooks';
import {setGuessedNumber} from '../redux/guessedNumberSlice';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Start'
>;

export type NavProps = {
  navigation: ProfileScreenNavigationProp;
};

const StartGameScreen = ({navigation}: NavProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [confirmedNumber, setConfirmedNumber] = useState<number>(0);
  const guessedNumber = useAppSelector(state => state.guessedNumber.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    guessedNumber > 0 && navigation.navigate('Action');
  }, [navigation, guessedNumber]);

  const finalConfirmHandler = () => {
    dispatch(setGuessedNumber(confirmedNumber)); // SET NUMBER TO GLOBAL STORE
    setConfirmedNumber(0);
    setConfirmed(false);
    navigation.navigate('Action');
  };

  const numberInputHandler = (inputText: string) => {
    if (guessedNumber > 0) {
      Keyboard.dismiss();
      return Alert.alert(
        'Can not set number!',
        'Game already run, so please proceed to game screen',
        [{text: 'Ok', style: 'destructive'}],
      );
    }
    setInputValue(inputText.replace(/[^0-9]/g, ''));
  };

  const inputHandler = (text: string) => {
    numberInputHandler(text);
  };

  const confirmHandler = () => {
    const choosenNumber = Number(inputValue);
    const cn = choosenNumber;

    if (isNaN(cn) || cn <= 0 || cn > 99) {
      return Alert.alert('Wrong number!', 'Number should be between 1 and 99', [
        {text: 'Ok', style: 'destructive', onPress: resetHandler},
      ]);
    }

    if (cn > 0 && cn <= 99) {
      setConfirmed(true); // OPENS MODAL WITH CHOOSEN NUMBER AND START BTN
      setConfirmedNumber(choosenNumber); // SET CHOOSEN NUMBER LOCALLY
      setInputValue('');
    }
  };

  const resetHandler = () => {
    setConfirmed(false);
    setInputValue('');
    dispatch(setGuessedNumber(0));
  };

  const inputProps = {
    value: inputValue,
    style: styles.input,
    placeholder: 'Choose a Number...',
    inputHandler,
    blurOnSubmit: true,
    autoCapitalize: 'none',
    keyboardType: 'numeric',
    maxLength: 2,
  };

  const modalProps = {
    confirmed,
    setConfirmed,
    confirmedNumber,
    finalConfirmHandler,
    resetHandler,
  };

  const buttonsArr = [
    {
      title: 'Confirm',
      handler: confirmHandler,
      style: {backgroundColor: color.accent},
    },
    {title: 'Reset', handler: resetHandler},
  ];

  const buttonBoxProps = {
    buttonsArr,
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.headerTitle}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Input {...inputProps} />
          <ButtonBox {...buttonBoxProps} />
        </Card>
        <DesigionModal {...modalProps} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    marginBottom: 50,
  },
  inputContainer: {
    width: 300,
  },
  input: {},
});
