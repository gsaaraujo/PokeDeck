import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
