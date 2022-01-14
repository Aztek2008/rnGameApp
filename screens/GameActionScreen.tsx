import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import ButtonBox from '../components/ButtonBox';
import GuessingModal from '../components/GuessingModal';
import {RootStackParamList} from '../components/ScreenSection';
import {setGuessedNumber} from '../redux/guessedNumberSlice';
import {useAppDispatch, useAppSelector} from '../hooks';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Action'
>;

export type NavProps = {
  navigation: ProfileScreenNavigationProp;
};

const GameActionScreen = ({navigation}: NavProps) => {
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(99);

  const guessedNumber = useAppSelector(state => state.guessedNumber.value);
  const [inputValue, setInputValue] = useState(0);
  // const [guessedOutput, setGuessedOutput] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isMutch, setIsMutch] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const guessNumber = () => randomFromInterval(minNumber, maxNumber);

    setTimeout(() => {
      const tryThisNumber: number = guessNumber();
      setInputValue(tryThisNumber);
      setConfirmed(true);
    }, 3000);
  }, [minNumber, maxNumber]);

  const randomFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetHandler = () => {
    dispatch(setGuessedNumber(0));
    setInputValue('');
    setConfirmed(false);
    navigation.navigate('Start');
  };

  // const buttonBoxProps = {
  //   onConfirm: confirmHandler,
  //   confirmButtonText: 'Confirm',
  //   style: styles.buttonBox,
  // };

  const modalProps = {
    confirmed,
    inputValue,
    setConfirmed,
    setMinNumber,
    setMaxNumber,
    setIsMutch,
    style: styles.modal,
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.headerTitle}>Go ahead try to guess...</Text>
      <Card style={styles.inputContainer}>
        {/* <Input {...inputProps} /> */}
        {/* <ButtonBox {...buttonBoxProps} /> */}
      </Card>
      <GuessingModal {...modalProps} />
    </View>
  );
};

export default GameActionScreen;

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
  buttonBox: {
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
