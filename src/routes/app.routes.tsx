import React from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { SearchPokemon } from '../screens/SearchPokemon';

import HomeSVG from '../assets/images/home.svg';
import SearchSVG from '../assets/images/search.svg';

import { theme } from '../global/styles/theme';

export const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { header, background, bottomTab, highlight, textColor100 } =
    theme.colors;

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={header} />
      <Navigator
        tabBarOptions={{
          style: {
            backgroundColor: bottomTab,
          },
          showLabel: false,
        }}
        sceneContainerStyle={{ backgroundColor: background }}>
        <Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeSVG fill={focused ? textColor100 : 'none'} />
            ),
          }}
        />
        <Screen
          name='SearchPokemon'
          component={SearchPokemon}
          options={{
            tabBarIcon: ({ focused }) => (
              <SearchSVG fill={focused ? textColor100 : 'none'} />
            ),
          }}
        />
      </Navigator>
    </>
  );
};
