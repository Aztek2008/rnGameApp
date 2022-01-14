import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  backgroundColor: string;
};

const Header = (props: Props) => {
  return (
    <View style={[styles.header, {backgroundColor: props.backgroundColor}]}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
    elevation: 15,
  },
  headerTitle: {
    fontSize: 18,
  },
});
