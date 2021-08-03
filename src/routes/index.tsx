import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/useAuth';
import { DeckProvider } from '../context/deck';

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.name ? (
        <DeckProvider>
          <AppRoutes />
        </DeckProvider>
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
};
