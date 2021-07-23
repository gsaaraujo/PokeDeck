import axios from 'axios';
import { DB_API_URL } from 'react-native-dotenv';

export const databaseApi = axios.create({
  baseURL: DB_API_URL,
});
