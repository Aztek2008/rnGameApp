import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import StartGameScreen from '../screens/StartGameScreen';
import GameActionScreen from '../screens/GameActionScreen';

export type RootStackParamList = {
  Start: undefined;
  Action: undefined;
};
const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const ScreenSection = () => {
  return (
    <Navigator initialRouteName="Start">
      <Screen
        name="Start"
        component={StartGameScreen}
        options={headerOptions}
      />
      <Screen
        name="Action"
        component={GameActionScreen}
        options={headerOptions}
      />
    </Navigator>
  );
};

const headerOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    // backgroundColor: '#88C1CB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default ScreenSection;
