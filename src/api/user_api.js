import axios from 'axios';

const authenticate = () => axios.get('/user/authenticate');

const logIn = (email, password) =>
  axios.post('/user/login', { email, password });

  
// Signing up with credentials and an image
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

const update = (data) => axios.post('/user/update', data);

const changeDP = (formData) =>
  axios.post('/user/change-dp', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export {
  logIn,
  signUp,
  accountInfo,
  logOut,
  checkIsEmailRegistered,
  authenticate,
  update,
  changeDP,
};
