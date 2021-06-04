import axios from 'axios';

// axios.defaults.withCredentials = true;

const logIn = (email, password) =>
  axios.post('/user/login', { email, password });

const signUp = (formData) =>
  axios.post('/user/sign-up', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const accountInfo = () => axios.get('/user/account');

const logOut = () => axios.get('/user/log-out');

const checkIsEmailRegistered = (email) =>
  axios.post('/user/is-email-registered', { email });

export { logIn, signUp, accountInfo, logOut, checkIsEmailRegistered };
