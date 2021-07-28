import React from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { MyDeck } from '../screens/MyDeck';
import { SearchPokemon } from '../screens/SearchPokemon';

import HomeSVG from '../assets/images/home.svg';
import CreateSVG from '../assets/images/create.svg';
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
          name='MyDeck'
          component={MyDeck}
          options={{
            tabBarIcon: ({ focused }) => (
              <CreateSVG
                fill={focused ? textColor100 : 'none'}
                stroke={focused ? bottomTab : textColor100}
              />
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
