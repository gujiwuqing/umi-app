import axios from 'axios';

const request = axios.create({
  // baseURL: 'http://127.0.0.1:3000',
  timeout: 6000,
  withCredentials: true,
});

export default request;
