import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../constants/color';

type Button = {
  title: string;
  handler: (() => void) | undefined;
  style?: {[key: string]: string | number};
};

type Props = {
  buttonsArr: Button[];
  style?: {[key: string]: string | number};
};

const ButtonBox = (props: Props) => {
  const {buttonsArr, style} = props;

  return (
    <View style={{...styles.buttonBox, ...style}}>
      {buttonsArr?.length > 0 &&
        buttonsArr.map(button => (
          <TouchableOpacity
            key={button.title}
            activeOpacity={0.85}
            style={{...styles.inputButton, ...button.style}}
            onPress={button.handler}>
            <Text style={styles.inputButtonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  inputButton: {
    width: '40%',
    height: 40,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  inputButtonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    elevation: 5,
    fontSize: 12,
  },
});
