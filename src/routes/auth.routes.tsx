import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';

export const AuthRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();
  const { background } = theme.colors;

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
      <Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: {
            backgroundColor: background,
          },
        }}>
        <Screen name='SignIn' component={SignIn} />
      </Navigator>
    </>
  );
};
