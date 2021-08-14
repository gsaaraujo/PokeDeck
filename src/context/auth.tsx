import React, { useEffect, useState, createContext, ReactNode } from 'react';
import { Alert } from 'react-native';

import { ACCESS_TOKEN, USER } from '../configs/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { googleApi } from '../services/openIdApi';
import { databaseApi } from '../services/databaseApi';

type User = {
  name: string;
  picture: string;
};

type Data = {
  user: User;
  isLoading: boolean;
  handleIsLoading: (state: boolean) => void;
  handleDBApi: (data: LoginUser) => void;
  handleLogOut: () => void;
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
  }, [isLoading]);

  const handleUserAlreadyLogged = async () => {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
    const accessTokenParse = JSON.parse(accessToken as string);

    if (accessToken) {
      googleApi.defaults.headers.authorization = `Bearer ${accessTokenParse}`;

      try {
        const { data } = await googleApi.get('/userinfo');
        data.name = data.name.split(' ')[0];

        const user = {
          name: data.name,
          picture: data.picture,
        };

        setUser(user);
      } catch (error) {
        Alert.alert(
          'An unexpected error has occurred',
          'Please try again later',
        );
      }
    }
  };

  const handleDBApi = async (data: LoginUser) => {
    try {
      //Uncomment if you have some login backend api server running
      //<=========================================================>
      // const userData = await databaseApi.get(
      //   `/findUser/${data.username}/${data.password}`,
      // );
      // const userDataJson = JSON.stringify(userData.data);
      // await AsyncStorage.setItem(USER, userDataJson);
      // await AsyncStorage.setItem(
      //   ACCESS_TOKEN,
      //   JSON.stringify(userData.data.accessToken),
      // );
      // setUser(userData);

      //If you uncomment the code above, so comment the code below
      const userData = {
        name: 'Mr. Cat',
        picture:
          'https://thumbs.dreamstime.com/b/random-cat-love-cats-pet-catsslave-110819582.jpg',
      };

      const userDataJson = JSON.stringify(userData);

      await AsyncStorage.setItem(USER, userDataJson);

      setUser(userData);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Unable to connect', 'Invalid Username or Password');
    }
  };

  const handleIsLoading = (state: boolean) => setIsLoading(state);

  const handleLogOut = async () => {
    await AsyncStorage.removeItem(USER);
    await AsyncStorage.removeItem(ACCESS_TOKEN);

    setUser({} as User);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        handleIsLoading,
        handleDBApi,
        handleLogOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
