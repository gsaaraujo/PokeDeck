import axios from 'axios';

export const googleApi = axios.create({
  baseURL: 'https://openidconnect.googleapis.com/v1',
});
