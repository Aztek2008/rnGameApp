import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';

type Props = {
  value: string;
  style: {[key: string]: string | number};
  placeholder: string;
  inputHandler: (text: string) => void;
  blurOnSubmit: boolean;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  maxLength: number;
};

const Input: (props: Props) => JSX.Element = props => {
  return (
    <TextInput
      {...props}
      style={[props.value ? styles.input : styles.placeholder, props.style]}
      onChangeText={props.inputHandler}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    lineHeight: 2,
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 26,
  },
  placeholder: {
    height: 40,
    margin: 12,
    padding: 10,
    lineHeight: 2,
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 14,
  },
});
