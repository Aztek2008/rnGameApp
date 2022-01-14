import React from 'react';
import {StyleSheet, View} from 'react-native';
import color from '../constants/color';

type Props = {
  children?: JSX.Element | JSX.Element[];
  style: {[key: string]: string | number};
};

const Card = (props: Props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 30,
    minHeight: 200,
    borderRadius: 10,
    justifyContent: 'space-around',
    backgroundColor: color.textAccent,
    shadowColor: color.textMain,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 25,
  },
});
