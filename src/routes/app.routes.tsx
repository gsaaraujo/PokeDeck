import React from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { theme } from '../global/styles/theme';

export const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { header, background } = theme.colors;

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={header} />
      <Navigator>
        <Screen name='Home' component={Home} />
      </Navigator>
    </>
  );
};
