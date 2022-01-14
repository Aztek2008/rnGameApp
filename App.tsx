/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './redux/store';
import Header from './components/Header';
import color from './constants/color';
import ScreenSection from './components/ScreenSection';

const App = () => {
  const mainThemeColor = color.primary;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar backgroundColor={mainThemeColor} />
          <Header title={'Guess the number'} backgroundColor={mainThemeColor} />
          <ScreenSection />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
