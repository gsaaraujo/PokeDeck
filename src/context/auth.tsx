import React, { useEffect, useState, createContext, ReactNode } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER } from '../configs/asyncStorage';
import { databaseApi } from '../services/databaseApi';

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  accessToken: string;
};

type Data = {
  user: User;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  handleLocalDBApi: (data: LoginUser) => void;
};

type LoginUser = {
  username: string;
  password: string;
};

type ChildrenProps = {
  children: ReactNode;
};

export const AuthContext = createContext<Data>({} as Data);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState({} as User);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleUserAlreadyLogged();
  }, []);

  const handleUserAlreadyLogged = async () => {
    const userData = await AsyncStorage.getItem(USER);

    if (userData) {
      const userDataParse = JSON.parse(userData);

      setUser(userDataParse);
    }
  };

  const handleLocalDBApi = async (data: LoginUser) => {
    try {
      const userData = await databaseApi.get(
        `/findUser/${data.username}/${data.password}`,
      );

      const userDataJson = JSON.stringify(userData.data);
      AsyncStorage.setItem(USER, userDataJson);

      setUser(userData.data);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        setIsLoading,
        handleLocalDBApi,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
