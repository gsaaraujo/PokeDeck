import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AddCards } from './addCards.routes';

import { useAuth } from '../hooks/useAuth';
import { DeckProvider } from '../context/deck';

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.name ? (
        <DeckProvider>
          <AddCards />
        </DeckProvider>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
};
