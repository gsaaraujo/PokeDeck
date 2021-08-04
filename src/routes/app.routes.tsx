import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { MyDeck } from '../screens/MyDeck';
import { ChooseCards } from '../screens/ChooseCards';

import { theme } from '../global/styles/theme';

export const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  const { header, background, textColor100 } = theme.colors;

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
          cardStyle: {
            backgroundColor: background,
          },
        }}>
        <Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Screen
          name='MyDeck'
          component={MyDeck}
          options={{ title: 'My deck' }}
        />
        <Screen
          name='ChooseCards'
          component={ChooseCards}
          options={{ title: 'Choose your cards' }}
        />
      </Navigator>
    </>
  );
};
