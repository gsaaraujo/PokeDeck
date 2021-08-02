import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { MyDeck } from '../screens/MyDeck';

import { theme } from '../global/styles/theme';
import { AppRoutes } from './app.routes';

export const AddCards = () => {
  const { Navigator, Screen } = createStackNavigator();

  const { header, textColor100 } = theme.colors;

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={header} />
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: header,
          },
          headerTintColor: textColor100,
          headerTitleAlign: 'center',
          title: 'My deck',
        }}>
        <Screen
          name='AppRoutes'
          component={AppRoutes}
          options={{ headerShown: false }}
        />
        <Screen name='MyDeck' component={MyDeck} />
      </Navigator>
    </>
  );
};
